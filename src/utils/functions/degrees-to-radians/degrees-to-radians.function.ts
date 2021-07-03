import { isNumber } from '@utils';

export function degreesToRadians(degrees: number): number | null {
  if (!isNumber(degrees)) {
    return null;
  }

  return degrees * (Math.PI / 180);
}
