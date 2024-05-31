// src/components/GreetingForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GreetingForm from './greetingForm';

test('renders the form and submits a greeting', () => {
  render(<GreetingForm />);

  const input = screen.getByLabelText(/name/i);
  const button = screen.getByText(/greet/i);

  fireEvent.change(input, { target: { value: 'John' } });
  fireEvent.click(button);

  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});
