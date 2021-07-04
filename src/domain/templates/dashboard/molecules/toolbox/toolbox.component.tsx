import { useState } from 'react';

import { Button } from '@ui';

import S from './toolbox.styles';

import { callEditorFunction } from './utils';
import { ToolboxProps } from './toolbox.types';

export const Toolbox = ({ fabricJSEditor }: ToolboxProps): JSX.Element => {
  const [isToolboxVisible, setIsToolboxVisible] = useState<boolean>(true);

  const addCircle = () => callEditorFunction(fabricJSEditor, 'addCircle');

  const deleteAll = () => callEditorFunction(fabricJSEditor, 'deleteAll');

  const addTriangle = () => callEditorFunction(fabricJSEditor, 'addTriangle');

  const addRectangle = () => callEditorFunction(fabricJSEditor, 'addRectangle');

  const deleteSelected = () => callEditorFunction(fabricJSEditor, 'deleteSelected');

  const onMenuToggleButtonClick = () => setIsToolboxVisible((prev) => !prev);

  return (
    <>
      <S.StyledMenuToggleButton isActive={isToolboxVisible} onClick={onMenuToggleButtonClick} />
      <S.StyledWrapper isOpen={isToolboxVisible}>
        <S.StyledHeading>Toolbox</S.StyledHeading>
        <S.StyledButtonsWrapper>
          <Button onClick={addCircle} disabled={!isToolboxVisible}>
            Add Circle
          </Button>
          <Button onClick={addRectangle} disabled={!isToolboxVisible}>
            Add Rectangle
          </Button>
          <Button onClick={addTriangle} disabled={!isToolboxVisible}>
            Add Triangle
          </Button>
          <Button modifiers={['error']} onClick={deleteAll} disabled={!isToolboxVisible}>
            Delete All
          </Button>
          <Button modifiers={['error']} onClick={deleteSelected} disabled={!isToolboxVisible}>
            Delete Selected
          </Button>
        </S.StyledButtonsWrapper>
      </S.StyledWrapper>
    </>
  );
};
