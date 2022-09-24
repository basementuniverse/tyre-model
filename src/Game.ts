import * as dat from 'dat.gui';
import Debug from './Debug';
import Input from './Input';
import Camera from './Camera';
import Background from './Background';
import SkidCanvas from './SkidCanvas';
import Graph from './Graph';
import Car from './Car';
import TestWheel from './TestWheel';
import { vec } from './vec';
import { debounce } from './utilities';
import * as constants from './constants';
import * as config from './config.json';

export default class Game {
  private readonly initialCarPosition: vec = vec();
  private readonly initialCarDirection: number = 0;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private lastFrameTime: number;
  private lastFrameCountTime: number;
  private frameRate: number = 0;
  private frameCount: number = 0;

  public static screen: vec;
  private camera: Camera;
  private background: Background;
  private skidCanvas: SkidCanvas;
  private graph: Graph;

  private car: Car;
  private testWheel: TestWheel;

  public static settings: Record<string, any> = {
    reset: () => { },
    testWheel: false,
    drawSlipGraph: true,
    carWidth: 30,
    carLength: 50,
    frontWheelsOffset: 17,
    backWheelsOffset: -17,
    rightWheelsOffset: 14,
    leftWheelsOffset: -14,
    carEnginePower: 80,
    carEngineReversePower: 30,
    carBrakePower: 50,
    carSteeringAmount: 0.02,
    carSteeringCurve: 0.06,
    carSteeringResetAmount: 0.08,
    carMaxSpeed: 170,
    carSteeringAngleMax: 0.7,
    wheelWidth: 4,
    wheelLength: 12,
    tyreLongitudinalDrag: 0.001,
    tyreLateralDragMin: 0.028,
    tyreLateralDragMax: 0.193,
    tyreSpeedOffset: -0.121,
    tyreSpeedCoefficient: 1.6,
    tyreSlipOffset: 0.76,
    tyreSlipCoefficient: 0.8,
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

    this.camera = new Camera(this.initialCarPosition);
    this.background = new Background();
    this.skidCanvas = new SkidCanvas();
    this.graph = new Graph();

    // Reset car position and direction
    const reset = () => {
      this.car = new Car(
        this.initialCarPosition,
        this.initialCarDirection
      );

      this.testWheel = new TestWheel(
        this.initialCarPosition,
        this.initialCarDirection
      );
    };
    Game.settings.reset = reset;
    reset();

    this.lastFrameTime = this.lastFrameCountTime = performance.now();
    this.loop();

    // Setup GUI
    const gui = new dat.GUI({ width: 350 });
    gui.add(Game.settings, 'reset');
    gui.add(Game.settings, 'testWheel');
    gui.add(Game.settings, 'drawSlipGraph');
    gui.add(Game.settings, 'carWidth').min(10).max(100).step(1);
    gui.add(Game.settings, 'carLength').min(10).max(100).step(1);
    gui.add(Game.settings, 'frontWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'backWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'rightWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'leftWheelsOffset').min(-100).max(100).step(1);
    gui.add(Game.settings, 'carEnginePower').min(0).max(100).step(1);
    gui.add(Game.settings, 'carEngineReversePower').min(0).max(100).step(1);
    gui.add(Game.settings, 'carBrakePower').min(0).max(100).step(1);
    gui.add(Game.settings, 'carSteeringAmount').min(0).max(1);
    gui.add(Game.settings, 'carSteeringCurve').min(0).max(1);
    gui.add(Game.settings, 'carSteeringResetAmount').min(0).max(1);
    gui.add(Game.settings, 'carMaxSpeed').min(0).max(500).step(1);
    gui.add(Game.settings, 'carSteeringAngleMax').min(0).max(Math.PI).step(0.1);
    gui.add(Game.settings, 'wheelWidth').min(10).max(100).step(1);
    gui.add(Game.settings, 'wheelLength').min(10).max(100).step(1);
    gui.add(Game.settings, 'tyreLongitudinalDrag').min(0).max(1);
    gui.add(Game.settings, 'tyreLateralDragMin').min(0).max(1);
    gui.add(Game.settings, 'tyreLateralDragMax').min(0).max(1);
    gui.add(Game.settings, 'tyreSpeedOffset')
      .min(-1).max(1)
      .onChange(debounce(this.graph.update.bind(this.graph)));
    gui.add(Game.settings, 'tyreSpeedCoefficient')
      .min(0).max(5)
      .onChange(debounce(this.graph.update.bind(this.graph)));
    gui.add(Game.settings, 'tyreSlipOffset')
      .min(-1).max(1)
      .onChange(debounce(this.graph.update.bind(this.graph)));
    gui.add(Game.settings, 'tyreSlipCoefficient')
      .min(0).max(5)
      .onChange(debounce(this.graph.update.bind(this.graph)));
    gui.add(Game.settings, 'frontWheelDrive');
    gui.add(Game.settings, 'rearWheelDrive');

    this.graph.update(0);
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
    if (Game.settings.testWheel) {
      this.testWheel.handleInput();
    } else {
      this.car.handleInput();
    }
  }

  private update(dt: number): void {
    Game.screen = vec(this.canvas.width, this.canvas.height);

    if (Game.settings.testWheel) {
      this.testWheel.update(dt);
      this.camera.position = vec.clone(this.testWheel.position);
    } else {
      this.car.update(dt);
      this.camera.position = vec.clone(this.car.position);
    }

    Input.update();
  }

  private draw(): void {
    this.context.clearRect(0, 0, Game.screen.x, Game.screen.y);
    this.context.save();
    this.camera.draw(this.context);
    this.background.draw(this.context, this.camera);
    this.skidCanvas.draw(this.context, this.camera);

    if (Game.settings.testWheel) {
      this.testWheel.draw(this.context, this.skidCanvas);
      this.graph.draw(this.context, this.testWheel);
    } else {
      this.car.draw(this.context, this.skidCanvas);
      this.graph.draw(this.context, this.car);
    }

    Debug.draw(this.context);
    this.context.restore();
  }
}
