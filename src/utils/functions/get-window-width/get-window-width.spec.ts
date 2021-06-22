import { getWindowWidth, functionImportTest } from '@utils';

describe('getWindowWidth Function', () => {
  functionImportTest(getWindowWidth);

  it('should return window width', () => {
    expect(getWindowWidth()).toEqual(1024);
  });
});
