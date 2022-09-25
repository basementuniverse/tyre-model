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
    // Get chunks that overlap this position and size
    const chunks = this.getOverlappingChunks(position, size);

    // Draw a skid mark on each chunk
    for (const chunk of chunks) {
      this.drawSkidMark(
        chunk.context,
        vec.sub(position, vec.mul(chunk.position, this.chunkSize)),
        direction,
        size,
        alpha
      );
    }
  }

  private getOverlappingChunks(
    position: vec,
    size: vec
  ): (Chunk & { position: vec })[] {
    // Get corner bounds for the position and size
    const maxDimension = Math.max(size.x, size.y);
    const corners = [
      vec.add(position, vec(-maxDimension)), // top left
      vec.add(position, vec(maxDimension, -maxDimension)), // top right
      vec.add(position, vec(-maxDimension, maxDimension)), // bottom left
      vec.add(position, vec(maxDimension)), // bottom right
    ]
      .map(corner => ({
        position: corner,
        hash: this.hashPosition(this.chunkPosition(corner)),
      }))
      .filter(
        (corner, index, array) =>
          index === array.findIndex(current => current.hash === corner.hash)
      )
      .map(corner => corner.position);

    // Get chunks for each unique corner
    return corners.map(corner => this.fetchChunk(corner));
  }

  private fetchChunk(position: vec): Chunk & { position: vec } {
    let chunk: Chunk;
    const chunkPosition = this.chunkPosition(position);
    const hash = this.hashPosition(chunkPosition);
    if (hash in this.chunks) {
      chunk = this.chunks[hash];
    } else {
      // A chunk doesn't exist for this position, so create one
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = this.chunkSize;

      // Get a 2d context
      const context = canvas.getContext('2d');
      if (context === null) {
        throw new Error(`Couldn't get a 2d context for skid chunk '${hash}'.`);
      }
      this.chunks[hash] = chunk = { canvas, context };
    }
    return { ...chunk, position: chunkPosition };
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
      -size.x / 2,
      -size.y,
      size.x / 2,
      size.y
    );
    context.restore();
  }

  public draw(context: CanvasRenderingContext2D, camera: Camera): void {
    const bounds = camera.bounds;
    const start = this.chunkPosition(vec.sub(vec(bounds.left, bounds.top), vec(1)));
    const end = this.chunkPosition(vec.add(vec(bounds.right, bounds.bottom), vec(1)));

    // Draw all chunks currently within the camera bounds
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
