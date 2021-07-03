import { Button } from '@ui';
import { ToolboxProps } from './toolbox.types';

import S from './toolbox.styles';

import { callEditorFunction } from './utils';

export const Toolbox = ({ fabricJSEditor }: ToolboxProps): JSX.Element => {
  const addCircle = () => callEditorFunction(fabricJSEditor, 'addCircle');

  const deleteAll = () => callEditorFunction(fabricJSEditor, 'deleteAll');

  const addTriangle = () => callEditorFunction(fabricJSEditor, 'addTriangle');

  const addRectangle = () => callEditorFunction(fabricJSEditor, 'addRectangle');

  const deleteSelected = () => callEditorFunction(fabricJSEditor, 'deleteSelected');

  return (
    <S.StyledWrapper>
      <S.StyledHeading>Toolbox</S.StyledHeading>
      <S.StyledButtonsWrapper>
        <Button onClick={addCircle}>Add Circle</Button>
        <Button onClick={addRectangle}>Add Rectangle</Button>
        <Button onClick={addTriangle}>Add Triangle</Button>
        <Button modifiers={['error']} onClick={deleteAll}>
          Delete All
        </Button>
        <Button modifiers={['error']} onClick={deleteSelected}>
          Delete Selected
        </Button>
      </S.StyledButtonsWrapper>
    </S.StyledWrapper>
  );
};
