import { fabric } from 'fabric';
import { useState, ReactNode } from 'react';

import { Canvas } from './canvas/canvas.component';
import { Toolbox } from './toolbox/toolbox.component';
import { LoadingPage } from './loading-page/loading-page.component';

import { useFabricJsEditor } from './utils';
import { CANVAS_WIDTH_SCALE } from '@infrastructure';
import { getWindowWidth, getWindowHeight, useDebounce, useEventListener } from '@utils';

export const Dashboard = (): JSX.Element => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const isLoading = useDebounce(!canvas, 1000);
  const fabricJSEditor = useFabricJsEditor(canvas);

  useEventListener('resize', () => {
    if (!canvas) {
      return;
    }

    const width = getWindowWidth();
    const height = getWindowHeight();

    canvas.setHeight(height);
    canvas.setWidth(width * CANVAS_WIDTH_SCALE);
  });

  function renderContent(): ReactNode {
    if (isLoading) {
      return <LoadingPage />;
    }

    return <Toolbox fabricJSEditor={fabricJSEditor} />;
  }

  return (
    <>
      <Canvas setCanvas={setCanvas} />
      {renderContent()}
    </>
  );
};
