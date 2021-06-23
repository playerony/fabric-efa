import { EditorOptions, FabricJSEditor } from '../../../types';

export const callEditorFunction = (
  fabricJSEditor: FabricJSEditor | null,
  functionName: keyof EditorOptions,
): void => {
  const editor = fabricJSEditor?.editor;

  if (editor && typeof editor[functionName] == 'function') {
    editor[functionName]();
  }
};
