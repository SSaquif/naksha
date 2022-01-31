/**
 * A reusuable button element with
 * - JSX children pass through
 * - references the native HTML button via React forwardRef API
 * - JSX prop spreading with TS, so we don't need to provide a huge prop sheet
 * - Opinionated prop default, ie default attribute type='button' instead of 'submit'
 *
 * - Note: we do destructuring (ln 17) last so the props passed in overwrites the defaults
 */
import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'light' | 'dark' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <button ref={ref} type="button" {...props}>
        {children}
      </button>
    );
  }
);

Button.defaultProps = {
  variant: 'light',
  size: 'medium',
  isFullWidth: false,
};

Button.displayName = 'Button';
