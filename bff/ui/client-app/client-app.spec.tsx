import React from 'react';
import { render } from '@testing-library/react';
import { BasicClientApp } from './client-app.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicClientApp />);
  const rendered = getByText('hello from ClientApp');
  expect(rendered).toBeTruthy();
});
