import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <StyledLabel ref={ref} htmlFor={id} {...props}></StyledLabel>;
});

Label.displayName = 'Field.Label';
