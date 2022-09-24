import { vec } from './vec';

type MouseState = {
  button: boolean;
  position: vec;
};

const keys = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Space',
  'Enter',
  'Shift',
  'Control',
  'Escape',
] as const;

type KeyboardState = {
  [key in typeof keys[number]]?: boolean;
};

export default class Input {
  private static instance: Input;
  private keyboardState: KeyboardState = {};
  private previousKeyboardState: KeyboardState = {};
  private mouseState: MouseState = { button: false, position: vec() };
  private previousMouseState: MouseState = { button: false, position: vec() };

  private constructor() {
    window.addEventListener('mousedown', () => {
      this.mouseState.button = true;
    });
    window.addEventListener('mouseup', () => {
      this.mouseState.button = false;
    });
    window.addEventListener('touchstart', () => {
      this.mouseState.button = true;
    });
    window.addEventListener('touchend', () => {
      this.mouseState.button = false;
    });
    window.addEventListener('mousemove', e => {
      this.mouseState.position.x = e.offsetX;
      this.mouseState.position.y = e.offsetY;
    });
    window.addEventListener('keydown', e => {
      this.keyboardState[e.code as keyof KeyboardState] = true;
    });
    window.addEventListener('keyup', e => {
      this.keyboardState[e.code as keyof KeyboardState] = false;
    });
  }

  public static initialise(): void {
    Input.instance = new Input();
  }

  private static getInstance(): Input {
    if (Input.instance === undefined) {
      throw new Error('Input manager not properly initialised');
    }
    return Input.instance;
  }

  public static update(): void {
    const instance = Input.getInstance();
    instance.previousKeyboardState = Object.assign({}, instance.keyboardState);
    instance.previousMouseState = {
      button: instance.mouseState.button,
      position: vec.clone(instance.mouseState.position),
    };
  }

  public static keyDown(key?: keyof KeyboardState): boolean {
    const instance = Input.getInstance();

    // Check if any key is down
    if (!key) {
      for (const k in Object.keys(instance.keyboardState)) {
        if (instance.keyboardState[k as keyof KeyboardState]) {
          return true;
        }
      }
      return false;
    }
    return !!instance.keyboardState[key];
  }

  public static keyPressed(key?: keyof KeyboardState): boolean {
    const instance = Input.getInstance();

    // Check if any key was pressed
    if (!key) {
      for (const k in Object.keys(instance.keyboardState)) {
        if (
          instance.keyboardState[k as keyof KeyboardState] &&
          (
            !(k in instance.previousKeyboardState) ||
            !instance.previousKeyboardState[k as keyof KeyboardState]
          )
        ) {
          return true;
        }
      }
      return false;
    }
    return !!instance.keyboardState[key] && !instance.previousKeyboardState[key];
  }

  public static keyReleased(key?: keyof KeyboardState): boolean {
    const instance = Input.getInstance();

    // Check if any key was released
    if (key == null) {
      for (const k in instance.keyboardState) {
        if (
          !instance.keyboardState[k as keyof KeyboardState] &&
          !!instance.previousKeyboardState[k as keyof KeyboardState]
        ) {
          return true;
        }
      }
      return false;
    }
    return (
      !instance.keyboardState[key as keyof KeyboardState] &&
      !!instance.previousKeyboardState[key as keyof KeyboardState]
    );
  }

  public static mouseDown(): boolean {
    const instance = Input.getInstance();
    return !!instance.mouseState.button;
  }

  public static mousePressed(): boolean {
    const instance = Input.getInstance();
    return !!instance.mouseState.button && !instance.previousMouseState.button;
  }

  public static mouseReleased(): boolean {
    const instance = Input.getInstance();
    return !instance.mouseState.button && !!instance.previousMouseState.button;
  }

  public static mousePosition(): vec {
    const instance = Input.getInstance();
    return instance.mouseState.position;
  }
}
