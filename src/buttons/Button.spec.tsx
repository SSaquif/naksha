/**
 * Tests
 * 1. Defaults the type attribute to button
 * 2. Allows consumers to override the default type
 * 3. Allows all valid props to be spread onto the button element
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applies default type of button', () => {
    render(<Button>hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(<Button type="submit">hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies valid attribute to element', () => {
    render(<Button aria-label="Test">Hello</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
