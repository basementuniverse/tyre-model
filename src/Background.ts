import Entity from './Entity';
import Camera, { CameraBounds } from './Camera';

export default class Background implements Entity {
  private readonly largeGridSize: number = 300;
  private readonly largeGridWidth: number = 2;
  private readonly largeGridColour: string = 'rgba(255, 255, 255, 0.2)';

  private readonly smallGridSize: number = 100;
  private readonly smallGridWidth: number = 1;
  private readonly smallGridColour: string = 'rgba(255, 255, 255, 0.1)';

  public update(dt: number): void {}

  public draw(context: CanvasRenderingContext2D, camera: Camera): void {
    context.save();
    const bounds = camera.bounds;

    // Large grid
    context.strokeStyle = this.largeGridColour;
    context.lineWidth = this.largeGridWidth;
    this.drawGrid(
      context,
      this.largeGridSize,
      bounds
    );

    // Small grid
    context.strokeStyle = this.smallGridColour;
    context.lineWidth = this.smallGridWidth;
    this.drawGrid(
      context,
      this.smallGridSize,
      bounds
    );
    context.restore();
  }

  private drawGrid(
    context: CanvasRenderingContext2D,
    size: number,
    bounds: CameraBounds
  ): void {
    context.beginPath();

    const startX = Math.floor(bounds.left / size) * size;
    const endX = Math.ceil(bounds.right / size) * size;
    for (let x = startX; x <= endX; x += size) {
      context.moveTo(x, bounds.top);
      context.lineTo(x, bounds.bottom);
    }

    const startY = Math.floor(bounds.top / size) * size;
    const endY = Math.ceil(bounds.bottom / size) * size;
    for (let y = startY; y <= endY; y += size) {
      context.moveTo(bounds.left, y);
      context.lineTo(bounds.right, y);
    }

    context.stroke();
  }
}
