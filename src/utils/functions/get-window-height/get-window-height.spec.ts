import { getWindowHeight, functionImportTest } from '@utils';

describe('getWindowHeight Function', () => {
  functionImportTest(getWindowHeight);

  it('should return window width', () => {
    expect(getWindowHeight()).toEqual(768);
  });
});
