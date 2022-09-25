export function round(n: number, d: number = 0): number {
  const p = Math.pow(10, d);
  return Math.round(n * p + Number.EPSILON) / p;
}

export function clamp(a: number, min: number = 0, max: number = 1): number {
  return a < min ? min : (a > max ? max : a);
}

export function lerp(a: number, b: number, i: number): number {
  return a + (b - a) * i;
}

export function smoothstep(a: number, b: number, i: number): number {
  return lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));
}

export function wrapDirection(d: number): number {
  const c = Math.PI * 2;
  while (d < 0) { d += c; }
  while (d > c) { d -= c; }
  return d;
}

export function linearTransform(x: number, m: number, c: number): number {
  return x * m + c;
}

export function smoothPartial(x: number, p: number[]): number {
  return lerpArray(p, x, smoothstep);
}

export function frac(a: number): number {
  return a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);
}

export function lerpArray(a: number[], i: number, f: typeof lerp = lerp) {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
}

export function debounce(f: Function, ms: number = 100) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f.apply(this, args);
    }, ms);
  };
}
