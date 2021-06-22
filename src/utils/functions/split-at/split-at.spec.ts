import { splitAt, functionImportTest } from '@utils';

describe('splitAt Function', () => {
  functionImportTest(splitAt);

  describe('throw an error case', () => {
    it('should throw when the passed value is not an array or a string value', () => {
      // @ts-ignore
      expect(() => splitAt(null, 0)).toThrow('"value" parameter is not an array or a string value');
    });

    it('should throw when the passed index is not a number', () => {
      // @ts-ignore
      expect(() => splitAt([], null)).toThrow('"index" parameter is not a number');
    });

    it('should throw when the passed index is smaller than 0', () => {
      // @ts-ignore
      expect(() => splitAt([], -1)).toThrow('"index" parameter is smaller than 0');
    });

    it('should throw when the passed index is bigger than value length', () => {
      // @ts-ignore
      expect(() => splitAt([1], 2)).toThrow('"index" parameter is bigger than value length');
    });
  });

  it('should split passed array on 2 parts at the passed index', () => {
    expect(splitAt([1, 2], 0)).toEqual([[], [1, 2]]);
    expect(splitAt([1, 2], 1)).toEqual([[1], [2]]);
    expect(splitAt([1, 2], 2)).toEqual([[1, 2], []]);
  });

  it('should split passed string on 2 parts at the passed index', () => {
    expect(splitAt('test', 0)).toEqual(['', 'test']);
    expect(splitAt('test', 2)).toEqual(['te', 'st']);
    expect(splitAt('test', 4)).toEqual(['test', '']);
  });
});
