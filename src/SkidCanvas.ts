import Camera from './Camera';
import Entity from './Entity';
import { vec } from './vec';

type Chunk = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

export default class SkidCanvas implements Entity {
  private readonly chunkSize: number = 500;
  private readonly skidBaseAlpha: number = 0.25;
  private readonly skidColour: string = 'white';

  private chunks: Record<string, Chunk> = {};

  public update(dt: number): void { }

  public skid(
    position: vec,
    direction: number,
    size: vec,
    alpha: number
  ): void {
    // Get the chunk for the specified position
    let chunk: Chunk;
    const chunkPosition = this.chunkPosition(position);
    const hash = this.hashPosition(chunkPosition);
    if (hash in this.chunks) {
      chunk = this.chunks[hash];
    } else {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = this.chunkSize;

      // Get a 2d context
      const context = canvas.getContext('2d');
      if (context === null) {
        throw new Error(`Couldn't get a 2d context for skid chunk '${hash}'.`);
      }
      this.chunks[hash] = chunk = { canvas, context };
    }

    // Draw a skid mark on the chunk
    this.drawSkidMark(
      chunk.context,
      vec.sub(position, vec.mul(chunkPosition, this.chunkSize)),
      direction,
      size,
      alpha
    );
  }

  private chunkPosition(position: vec): vec {
    return vec.map(vec.mul(position, 1 / this.chunkSize), Math.floor);
  }

  private hashPosition(position: vec): string {
    return vec.str(position, '_');
  }

  private drawSkidMark(
    context: CanvasRenderingContext2D,
    position: vec,
    direction: number,
    size: vec,
    alpha: number
  ): void {
    context.save();
    context.translate(position.x, position.y);
    context.rotate(direction);
    context.globalAlpha = alpha * this.skidBaseAlpha;
    context.fillStyle = this.skidColour;
    context.fillRect(
      -size.x - size.y / 2,
      -size.y / 2,
      size.x + size.y / 2,
      size.y / 2
    );
    context.restore();
  }

  public draw(context: CanvasRenderingContext2D, camera: Camera): void {
    const bounds = camera.bounds;
    const start = this.chunkPosition(vec.sub(vec(bounds.left, bounds.top), vec(1)));
    const end = this.chunkPosition(vec.add(vec(bounds.right, bounds.bottom), vec(1)));
    for (let x = start.x; x <= end.x; x++) {
      for (let y = start.y; y <= end.y; y++) {
        const hash = this.hashPosition(vec(x, y));
        if (hash in this.chunks) {
          context.drawImage(
            this.chunks[hash].canvas,
            x * this.chunkSize,
            y * this.chunkSize
          );
        }
      }
    }
  }
}
