export function functionImportTest(func: Function) {
  describe('import test', () => {
    it(`should import ${func.name}`, () => {
      if (typeof func != 'function') {
        throw new Error('parameter is not a function');
      }

      expect(typeof func).toBe('function');
    });
  });
}
