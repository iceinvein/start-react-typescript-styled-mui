import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start something/i);
  expect(linkElement).toBeInTheDocument();
});
