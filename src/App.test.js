/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './app/App';

test('renders learn react link', () => {
  const AppRendered = render(<App />);
  expect(AppRendered).toBeInTheDocument();
});
