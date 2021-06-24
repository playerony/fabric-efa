import { EditorOptions, FabricJSEditor } from '@domain/dashboard/types';

import { isFunction } from '@utils';

export const callEditorFunction = (
  fabricJSEditor: FabricJSEditor | null,
  functionName: keyof EditorOptions,
): void => {
  const editor = fabricJSEditor?.editor;

  if (editor) {
    const func = editor[functionName];

    if (isFunction(func)) {
      func();
    }
  }
};
