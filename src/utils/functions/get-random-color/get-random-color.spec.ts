import { splitAt, getRandomColor, functionImportTest } from '@utils';

describe('getRandomColor Function', () => {
  functionImportTest(getRandomColor);

  it('should return random color', () => {
    const result = getRandomColor();

    const [prefix, color] = splitAt<string>(result, 1);

    expect(prefix).toEqual('#');
    expect(color).toHaveLength(6);
  });
});
