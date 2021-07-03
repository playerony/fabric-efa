import { degreesToRadians, functionImportTest } from '@utils';

describe('degreesToRadians Function', () => {
  functionImportTest(degreesToRadians);

  it('should return null when the passed value is not a number', () => {
    // @ts-ignore
    expect(degreesToRadians(null)).toBeNull();

    // @ts-ignore
    expect(degreesToRadians(undefined)).toBeNull();

    // @ts-ignore
    expect(degreesToRadians(() => {})).toBeNull();

    // @ts-ignore
    expect(degreesToRadians([])).toBeNull();
  });

  it('should convert degrees to radians', () => {
    expect(degreesToRadians(45)).toEqual(0.7853981633974483);
    expect(degreesToRadians(90)).toEqual(1.5707963267948966);
    expect(degreesToRadians(135)).toEqual(2.356194490192345);
  });
});
