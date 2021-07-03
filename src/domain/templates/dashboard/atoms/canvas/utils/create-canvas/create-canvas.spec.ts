import { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';
import { createCanvas } from './create-canvas.function';

describe('createCanvas Function', () => {
  functionImportTest(createCanvas);

  it('should return null when passed reference is a falsy value', () => {
    // @ts-ignore
    expect(createCanvas('')).toBeNull();

    // @ts-ignore
    expect(createCanvas({})).toBeNull();

    // @ts-ignore
    expect(createCanvas([])).toBeNull();

    // @ts-ignore
    expect(createCanvas(null)).toBeNull();

    // @ts-ignore
    expect(createCanvas(undefined)).toBeNull();
  });

  it('should return null when passed reference is null', () => {
    const { result } = renderHook(() => useRef(null));

    expect(createCanvas(result.current)).toBeNull();
  });

  it('should return canvas object', () => {
    const canvasElement = document.createElement('canvas');
    const { result } = renderHook(() => useRef(canvasElement));

    const createdCanvas = createCanvas(result.current);

    if (!createdCanvas) {
      throw new Error('created canvas is a null value');
    }

    expect(Object.keys(createdCanvas)).toHaveLength(39);
  });
});
