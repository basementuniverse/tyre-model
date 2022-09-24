export default interface Entity {
  handleInput?(): void;
  update(dt: number, ...args: any[]): void;
  draw(context: CanvasRenderingContext2D, ...args: any[]): void;
}
