// src/components/FilteredList.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilteredList from './filteredList';

const items = ['Apple', 'Banana', 'Cherry', 'Date'];

test('filters the list of items based on input', () => {
  render(<FilteredList items={items} />);

  const input = screen.getByPlaceholderText(/filter items/i);

  fireEvent.change(input, { target: { value: 'a' } });
  expect(screen.getByText('Apple')).toBeInTheDocument();
  expect(screen.getByText('Banana')).toBeInTheDocument();
  expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
  expect(screen.queryByText('Date')).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'e' } });
  expect(screen.getByText('Cherry')).toBeInTheDocument();
  expect(screen.getByText('Date')).toBeInTheDocument();
  expect(screen.queryByText('Apple')).toBeInTheDocument();
  expect(screen.queryByText('Banana')).not.toBeInTheDocument();
});
