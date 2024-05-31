// src/components/UserList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './userList';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: 'John Doe' }]),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test('renders loading initially and then the user list', async () => {
  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
});
