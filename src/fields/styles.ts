import styled from 'styled-components';
import { transparentize } from 'polished';
import {
  LIGHT_COLOR,
  DARK_COLOR,
  DARK_TEXT_COLOR,
  DISABLED_OPACITY,
} from '../utils/styles';
import { TextareaProps } from './Textarea';

export const StyledLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${DARK_TEXT_COLOR};
  background-color: transparent;
  border: 1px solid ${DARK_COLOR};
  appearance: none;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${LIGHT_COLOR};
    box-shadow: 0 0 0 0.2rem ${transparentize(0.75, LIGHT_COLOR)};
  }

  &:disabled {
    background-color: ${DARK_COLOR};
    opacity: ${DISABLED_OPACITY};
  }
`;

// text area that inherits all it's styles from above StyledInput
export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  resize: ${(p) => !p.isResizable && 'none'};
`;
