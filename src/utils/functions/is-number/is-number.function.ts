export function isNumber(value: any): value is number {
  if (typeof value === 'number') {
    return value - value === 0;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite(+value);
  }

  return false;
}
