import { fabric } from 'fabric';

import { EditorOptions } from '.';

export interface FabricJSEditor {
  editor: EditorOptions | null;
  selectedObjects: fabric.Object[];
}
