import { fabric } from 'fabric';
import { useState, useEffect } from 'react';

import { FabricJSEditor } from '../../types';

import { bindEvents, buildEditor } from './utils';

export const useFabricJsEditor = (canvas: fabric.Canvas | null): FabricJSEditor => {
  const [selectedObjects, setSelectedObject] = useState<fabric.Object[]>([]);

  useEffect(() => {
    bindEvents({ canvas, setSelectedObject });
  }, [canvas]);

  const editor = buildEditor(canvas);

  return {
    editor,
    selectedObjects,
  };
};
