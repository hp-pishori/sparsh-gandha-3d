/**
 * Canvas rendering utilities and image sequence loader for Sparsh Gandha
 */

export class SequenceImageLoader {
  private cache: Map<string, HTMLImageElement> = new Map();
  private loadingSet: Set<string> = new Set();
  private folder: string;
  private totalFrames: number;
  private onFrameLoaded?: (loadedCount: number, total: number) => void;

  constructor(folder: string, totalFrames: number = 240, onFrameLoaded?: (loadedCount: number, total: number) => void) {
    this.folder = folder;
    this.totalFrames = totalFrames;
    this.onFrameLoaded = onFrameLoaded;
  }

  public setFolder(newFolder: string) {
    this.folder = newFolder;
  }

  private getPath(index: number, folder: string = this.folder): string {
    const frameNum = Math.min(Math.max(1, index + 1), this.totalFrames);
    const padded = frameNum.toString().padStart(3, "0");
    return `/FinalFrames/${folder}/ezgif-frame-${padded}.jpg`;
  }

  public preloadPriority(folder: string = this.folder, count: number = 20): Promise<void> {
    const promises: Promise<void>[] = [];
    for (let i = 0; i < Math.min(count, this.totalFrames); i++) {
      promises.push(this.loadImage(i, folder));
    }
    return Promise.all(promises).then(() => {});
  }

  public preloadProgressive(folder: string = this.folder, onProgress?: (percent: number) => void) {
    // 1. Keyframes first (every 8th frame) for fast full-range scrubbing
    const keyframes: number[] = [];
    for (let i = 0; i < this.totalFrames; i += 8) {
      keyframes.push(i);
    }

    // 2. Secondary frames (every 4th frame)
    const secondaryFrames: number[] = [];
    for (let i = 0; i < this.totalFrames; i += 4) {
      if (!keyframes.includes(i)) secondaryFrames.push(i);
    }

    // 3. Remaining frames
    const remainingFrames: number[] = [];
    for (let i = 0; i < this.totalFrames; i++) {
      if (!keyframes.includes(i) && !secondaryFrames.includes(i)) remainingFrames.push(i);
    }

    const queue = [...keyframes, ...secondaryFrames, ...remainingFrames];
    let loaded = 0;

    const loadNextBatch = (batchSize: number = 4) => {
      if (queue.length === 0) return;
      const batch = queue.splice(0, batchSize);
      Promise.all(batch.map((idx) => this.loadImage(idx, folder))).then(() => {
        loaded += batch.length;
        if (onProgress) {
          onProgress(Math.round((loaded / this.totalFrames) * 100));
        }
        if (queue.length > 0) {
          if (typeof window !== "undefined" && "requestIdleCallback" in window) {
            (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => loadNextBatch(batchSize));
          } else {
            setTimeout(() => loadNextBatch(batchSize), 16);
          }
        }
      });
    };

    loadNextBatch(6);
  }

  public loadImage(index: number, folder: string = this.folder): Promise<void> {
    const path = this.getPath(index, folder);
    if (this.cache.has(path)) {
      return Promise.resolve();
    }
    if (this.loadingSet.has(path)) {
      return Promise.resolve();
    }

    this.loadingSet.add(path);

    return new Promise((resolve) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        this.cache.set(path, img);
        this.loadingSet.delete(path);
        if (this.onFrameLoaded) {
          this.onFrameLoaded(this.cache.size, this.totalFrames);
        }
        resolve();
      };
      img.onerror = () => {
        this.loadingSet.delete(path);
        resolve();
      };
    });
  }

  public getImage(index: number, folder: string = this.folder): HTMLImageElement | null {
    const targetPath = this.getPath(index, folder);
    if (this.cache.has(targetPath)) {
      return this.cache.get(targetPath)!;
    }

    // If exact frame not yet loaded, find closest available frame in same folder
    let bestDist = Infinity;
    let fallbackImg: HTMLImageElement | null = null;

    for (let offset = 1; offset <= 20; offset++) {
      const prev = index - offset;
      const next = index + offset;
      if (prev >= 0) {
        const pPath = this.getPath(prev, folder);
        if (this.cache.has(pPath)) {
          fallbackImg = this.cache.get(pPath)!;
          break;
        }
      }
      if (next < this.totalFrames) {
        const nPath = this.getPath(next, folder);
        if (this.cache.has(nPath)) {
          fallbackImg = this.cache.get(nPath)!;
          break;
        }
      }
    }

    // Trigger load of target in background if not already loading
    this.loadImage(index, folder);

    return fallbackImg;
  }
}

/**
 * Draws image centered in canvas using luxury "contain" fit with soft feathered edges
 */
export function drawContainedImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number,
  options: {
    scale?: number;
    offsetY?: number;
    featherEdges?: boolean;
  } = {}
) {
  const { scale = 1.0, offsetY = 0, featherEdges = true } = options;

  const imgW = img.naturalWidth || 1280;
  const imgH = img.naturalHeight || 720;

  // Calculate contain fit with subtle responsive scale
  const hRatio = canvasWidth / imgW;
  const vRatio = canvasHeight / imgH;
  const baseRatio = Math.min(hRatio, vRatio);
  const finalRatio = baseRatio * scale;

  const drawW = imgW * finalRatio;
  const drawH = imgH * finalRatio;
  const drawX = (canvasWidth - drawW) / 2;
  const drawY = (canvasHeight - drawH) / 2 + offsetY;

  // Clear with background color matching frames (#090807)
  ctx.fillStyle = "#090807";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw image
  ctx.drawImage(img, drawX, drawY, drawW, drawH);

  if (featherEdges) {
    // Soft vignette around canvas border to ensure 100% seamless blending with any monitor or contrast
    const maxDim = Math.max(canvasWidth, canvasHeight) / 2;
    const vignette = ctx.createRadialGradient(
      canvasWidth / 2,
      canvasHeight / 2,
      maxDim * 0.65,
      canvasWidth / 2,
      canvasHeight / 2,
      maxDim * 1.15
    );
    vignette.addColorStop(0, "rgba(9, 8, 7, 0)");
    vignette.addColorStop(0.7, "rgba(9, 8, 7, 0.45)");
    vignette.addColorStop(1, "rgba(9, 8, 7, 0.95)");

    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
}
