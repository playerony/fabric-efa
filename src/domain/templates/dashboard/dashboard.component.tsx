import { fabric } from 'fabric';
import { useState, useEffect, ReactNode } from 'react';

import { getWindowWidth, getWindowHeight, useDebounce, useEventListener } from '@utils';
import { CANVAS_WIDTH_SCALE, CANVAS_BUTTONS_CONTAINER_ID } from '@infrastructure';
import { Canvas } from './atoms';
import { Toolbox, LoadingPage } from './molecules';

import { bindEvents, useFabricJsEditor } from './utils';

export const Dashboard = (): JSX.Element => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const isLoading = useDebounce(!canvas, 1000);
  const fabricJSEditor = useFabricJsEditor(canvas);

  useEffect(() => {
    if (canvas) {
      bindEvents(canvas);
    }
  }, [canvas]);

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
      <div id={CANVAS_BUTTONS_CONTAINER_ID} />
    </>
  );
};
