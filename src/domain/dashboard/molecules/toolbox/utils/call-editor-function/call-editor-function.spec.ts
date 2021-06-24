import { functionImportTest } from '@utils';
import { callEditorFunction } from './call-editor-function.function';

describe('callEditorFunction Function', () => {
  functionImportTest(callEditorFunction);

  it('should call target fabricJSEditor`s editor parameter function', () => {
    const functionMock = jest.fn();

    const fabricJSEditorMock = {
      editor: {
        testFunction: functionMock,
      },
    };

    // @ts-ignore
    callEditorFunction(fabricJSEditorMock, 'testFunction');

    expect(functionMock).toHaveBeenCalled();
  });
});
