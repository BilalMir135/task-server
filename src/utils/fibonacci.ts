//Binet’s formula
export function binet(n: number) {
  return Math.round((Math.pow(1.618033988749895, n) - Math.pow(-0.6180339887498949, n)) / 2.23606797749979);
}
