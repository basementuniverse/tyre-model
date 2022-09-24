import * as dat from 'dat.gui';
import Debug from './Debug';
import Input from './Input';
import Car from './Car';
import { vec } from './vec';
import * as constants from './constants';
import * as config from './config.json';

export default class Game {
  private readonly initialCarPosition = vec(300, 300);
  private readonly initialCarDirection = 0;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private lastFrameTime: number;
  private lastFrameCountTime: number;
  private frameRate: number = 0;
  private frameCount: number = 0;

  public static screen: vec;

  private skidCanvas: HTMLCanvasElement;
  private skidContext: CanvasRenderingContext2D;

  private car: Car;

  public static settings: Record<string, any> = {
    carWidth: 30,
    carLength: 50,
    frontWheelsOffset: 17,
    backWheelsOffset: -17,
    rightWheelsOffset: 14,
    leftWheelsOffset: -14,
    carEnginePower: 35,
    carEngineReversePower: 15,
    carBrakePower: 50,
    carSteeringAmount: 0.02,
    carSteeringCurve: 0.12,
    carSteeringResetAmount: 0.08,
    carMaxSpeed: 250,
    carSteeringAngleMax: 0.7,
    wheelWidth: 4,
    wheelLength: 12,
    tyreLongitudinalDrag: 0.001,
    tyreLateralDrag: 0.024,
    tyreSpeedOffset: 0.2,
    tyreSpeedCoefficient: 0.56,
    tyreSlipOffset: 0.52,
    tyreSlipCoefficient: 1,
    frontWheelDrive: true,
    rearWheelDrive: true,
  };

  public constructor(container: HTMLElement | null) {
    if (container === null) {
      throw new Error('A valid container element must be specified.');
    }
    if (container.tagName.toLowerCase() !== 'canvas') {
      throw new Error('Container element must be a canvas.');
    }
    this.canvas = container as HTMLCanvasElement;

    // Get a 2d context
    const context = this.canvas.getContext('2d');
    if (context !== null) {
      this.context = context;
    } else {
      throw new Error("Couldn't get a 2d context.");
    }

    // Create the skid canvas and context
    this.skidCanvas = document.createElement('canvas');
    const skidContext = this.skidCanvas.getContext('2d');
    if (skidContext !== null) {
      this.skidContext = skidContext;
    } else {
      throw new Error("Couldn't get a 2d context for the skid canvas.");
    }

    // Handle resize
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
  }

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public initialise(): void {
    Input.initialise();

    this.car = new Car(
      vec.clone(this.initialCarPosition),
      this.initialCarDirection
    );

    this.lastFrameTime = this.lastFrameCountTime = performance.now();
    this.loop();

    const gui = new dat.GUI();
    gui.add(Game.settings, 'carWidth').min(10).max(100).step(1);
    gui.add(Game.settings, 'carLength').min(10).max(100).step(1);
    gui.add(Game.settings, 'frontWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'backWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'rightWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'leftWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'carEnginePower').min(0).max(100).step(1);
    gui.add(Game.settings, 'carEngineReversePower').min(0).max(100).step(1);
    gui.add(Game.settings, 'carBrakePower').min(0).max(100).step(1);
    gui.add(Game.settings, 'carSteeringAmount').min(0).max(1).step(0.01);
    gui.add(Game.settings, 'carSteeringCurve').min(0).max(1).step(0.01);
    gui.add(Game.settings, 'carSteeringResetAmount').min(0).max(1).step(0.01);
    gui.add(Game.settings, 'carMaxSpeed').min(0).max(500).step(1);
    gui.add(Game.settings, 'carSteeringAngleMax').min(0).max(Math.PI).step(0.1);
    gui.add(Game.settings, 'wheelWidth').min(10).max(100).step(1);
    gui.add(Game.settings, 'wheelLength').min(10).max(100).step(1);
    gui.add(Game.settings, 'tyreLongitudinalDrag').min(0).max(0.1).step(0.0001);
    gui.add(Game.settings, 'tyreLateralDrag').min(0).max(0.1).step(0.0001);
    gui.add(Game.settings, 'tyreSpeedOffset').min(0).max(1).step(0.001);
    gui.add(Game.settings, 'tyreSpeedCoefficient').min(0).max(1).step(0.001);
    gui.add(Game.settings, 'tyreSlipOffset').min(0).max(1).step(0.001);
    gui.add(Game.settings, 'tyreSlipCoefficient').min(0).max(1).step(0.001);
    gui.add(Game.settings, 'frontWheelDrive');
    gui.add(Game.settings, 'rearWheelDrive');

    gui.add(Game.settings, 'temp').min(0).max(1).step(0.01);
  }

  private loop(): void {
    const now = performance.now();
    const elapsedTime = Math.min(now - this.lastFrameTime, constants.FPS_MIN);

    // Calculate framerate
    if (now - this.lastFrameCountTime >= 1000) {
      this.lastFrameCountTime = now;
      this.frameRate = this.frameCount;
      this.frameCount = 0;
    }
    this.frameCount++;
    this.lastFrameTime = now;
    if (config.showFPS) {
      Debug.value('FPS', this.frameRate);
    }

    // Do game loop
    this.handleInput();
    this.update(elapsedTime);
    this.draw();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  private handleInput(): void {
    this.car.handleInput();
  }

  private update(dt: number): void {
    Game.screen = vec(this.canvas.width, this.canvas.height);

    this.car.update(dt);

    Input.update();
  }

  private draw(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.setTransform(1, 0, 0, 1, 0, 0);

    this.car.draw(this.context, this.skidContext);

    Debug.draw(this.context);
  }
}
