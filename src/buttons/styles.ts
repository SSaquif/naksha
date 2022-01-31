import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

import {
  LIGHT_COLOR,
  LIGHT_TEXT_COLOR,
  DARK_COLOR,
  DARK_TEXT_COLOR,
  DANGER_COLOR,
  DANGER_TEXT_COLOR,
  DISABLED_OPACITY,
} from '../utils/styles';
// This utility function will also use the polished transparentize
// method to compute the transparent focus ring value at runtime.
import { transparentize } from 'polished';

// style utility function
const colorStyles = (p: ButtonProps) => {
  let color = LIGHT_TEXT_COLOR,
    backgroundColor = LIGHT_COLOR;

  if (p.variant === 'dark') {
    color = DARK_TEXT_COLOR;
    backgroundColor = DARK_COLOR;
  } else if (p.variant === 'danger') {
    color = DANGER_TEXT_COLOR;
    backgroundColor = DANGER_COLOR;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};

    &:focus-visible {
      border-color: ${color};
      box-shadow: 0 0 0 0.2rem ${transparentize(0.45, backgroundColor)};
    }

    &:focus {
      outline: solid ${backgroundColor};
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: ${(p) => (p.isFullWidth ? 'block' : 'inline-block')};
  width: ${(p) => p.isFullWidth && '100%'};
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: ${(p) => {
    if (p.size === 'large') {
      return '0.5rem 1rem';
    } else if (p.size === 'small') {
      return '0.25rem 0.5rem';
    }
    return '0.4rem 0.75rem';
  }};
  font-size: ${(p) => {
    if (p.size === 'large') {
      return '1.25rem';
    } else if (p.size === 'small') {
      return '0.875rem';
    }
    return '1rem';
  }};
  line-height: 1.5;
  border-radius: 0.3rem;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: inherit;
  }

  &:disabled {
    cursor: inherit;
    opacity: ${DISABLED_OPACITY};
  }
  ${colorStyles}
`;
