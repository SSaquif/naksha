import React from 'react';
import { useUniqueID } from '../hooks/useUniqueID';
import { FieldContext } from './FieldContext';

import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';

// Composition Interface
interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
