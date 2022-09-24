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
  while (d < 0) {
    d += c;
  }
  while (d > c) {
    d -= c;
  }

  return d;
}

export function linearTransform(
  x: number,
  m: number,
  c: number
): number {
  return x * m + c;
}
