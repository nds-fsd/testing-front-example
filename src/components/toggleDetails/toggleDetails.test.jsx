// src/components/ToggleDetails.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleDetails from './toggleDetails';

test('toggles the display of details', () => {
  render(<ToggleDetails />);

  const button = screen.getByText(/show details/i);
  fireEvent.click(button);

  expect(screen.getByText(/here are some details/i)).toBeInTheDocument();

  fireEvent.click(button);

  expect(screen.queryByText(/here are some details/i)).not.toBeInTheDocument();
});

