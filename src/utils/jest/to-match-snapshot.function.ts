export function toMatchSnapshot(func: Function) {
  describe('snapshot test', () => {
    it('should match snapshot', () => {
      if (typeof func != 'function') {
        throw new Error('parameter is not a function');
      }

      expect(func()).toMatchSnapshot();
    });
  });
}
