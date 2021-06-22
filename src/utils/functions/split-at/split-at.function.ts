import { isArray, isNumber, isString } from '@utils';

export function splitAt<T>(value: T, index: number): [string | T[], string | T[]] {
  if (!isArray<T>(value) && !isString(value)) {
    throw new Error('"value" parameter is not an array or a string value');
  }

  if (!isNumber(index)) {
    throw new Error('"index" parameter is not a number');
  }

  if (index < 0) {
    throw new Error('"index" parameter is smaller than 0');
  }

  if (index > value.length) {
    throw new Error('"index" parameter is bigger than value length');
  }

  const firstPart = value.slice(0, index);
  const secondPart = value.slice(index);

  return [firstPart, secondPart];
}
