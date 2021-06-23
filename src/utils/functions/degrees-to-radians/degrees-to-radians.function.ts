import { isNumber } from '@utils';

export function degreesToRadians(degrees: number): number {
  if (!isNumber(degrees)) {
    throw new Error('parameter is not a number');
  }

  return degrees * (Math.PI / 180);
}
