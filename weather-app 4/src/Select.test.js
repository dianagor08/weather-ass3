import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from './Select';

test('renders select component', () => {
  const { getByText } = render(<Select data={[]} />);
  const selectElement = getByText(/Select component/i);
  expect(selectElement).toBeInTheDocument();
});

test('updates user input on select change', () => {
  const { getByRole } = render(<Select data={[]} />);
  const selectElement = getByRole('combobox');

  fireEvent.change(selectElement, { target: { value: 'Test City, TC' } });

  expect(selectElement.value).toBe('Test City, TC');
});

test('handles form submission and displays selected value', () => {
  const { getByRole, getByText } = render(<Select data={[]} />);
  const selectElement = getByRole('combobox');
  const submitButton = getByRole('button', { name: /submit/i });

  fireEvent.change(selectElement, { target: { value: 'Test City, TC' } });
  fireEvent.click(submitButton);

  const selectedValueElement = getByText(/You selected Test City, TC/i);
  expect(selectedValueElement).toBeInTheDocument();
});

test('does not display selected value by default', () => {
  const { queryByText } = render(<Select data={[]} />);
  const selectedValueElement = queryByText(/You selected/i);
  expect(selectedValueElement).toBeNull();
});
