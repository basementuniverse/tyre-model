export type vec = { x: number, y: number };
export const vec = (x?: number, y?: number): vec => {
  if (x === undefined && y === undefined) {
    return { x: 0, y: 0 };
  }
  if (typeof x === 'object') {
    return vec.clone(x);
  }
  if (y === undefined) {
    return vec.diag(x ?? 0);
  }
  return { x: x ?? 0, y: y ?? 0 };
}
vec.clone = (a: vec): vec => ({ x: a.x, y: a.y });
vec.diag = (n: number): vec => ({ x: n, y: n });
vec.components = (a: vec): [number, number] => [a.x, a.y];
vec.ux = () => vec(1, 0);
vec.uy = () => vec(0, 1);
vec.add = (a: vec, b: vec): vec => ({ x: a.x + b.x, y: a.y + b.y });
vec.mul = (a: vec, b: number): vec => ({ x: a.x * b, y: a.y * b });
vec.sub = (a: vec, b: vec) => ({ x: a.x - b.x, y: a.y - b.y });
vec.len = (a: vec): number => Math.sqrt(a.x * a.x + a.y * a.y);
vec.manhattan = (a: vec): number => Math.abs(a.x) + Math.abs(a.y);
vec.nor = (a: vec): vec => {
  const l = vec.len(a);
  return l ? { x: a.x / l, y: a.y / l } : vec();
};
vec.dot = (a: vec, b: vec): number => a.x * b.x + a.y * b.y;
vec.rot = (a: vec, r: number): vec => {
  const s = Math.sin(r), c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}
vec.eq = (a: vec, b: vec): boolean => a.x === b.x && a.y === b.y;
vec.rad = (a: vec): number => Math.atan2(a.y, a.x);
vec.map = (a: vec, f: (n: number, l?: string) => number) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });
vec.str = (a: vec, s: string = ', ') => [a.x, s, a.y].join('');
vec.avg = (...v: vec[]): vec => v.length
  ? vec(
    v.reduce((a, c) => a + c.x, 0) / v.length,
    v.reduce((a, c) => a + c.y, 0) / v.length,
  )
  : vec();
