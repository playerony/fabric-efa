import { isArray, functionImportTest } from '@utils';

describe('isArray Function', () => {
  functionImportTest(isArray);

  it('should return false when provided parameter is not a number value', () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray(-500)).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray('123')).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
  });

  it('should return true when provided parameter is a number value', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray([1, 2, 3])).toBeTruthy();
  });
});
