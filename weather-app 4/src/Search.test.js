import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

// Mock the Select component
jest.mock('./Select', () => ({ data }) => (
  <div data-testid="mock-select">{data.length} options</div>
));

test('renders search component', () => {
  const { getByText } = render(<Search />);
  const searchElement = getByText(/Search component/i);
  expect(searchElement).toBeInTheDocument();
});

test('updates search term on input change', () => {
  const { getByRole } = render(<Search />);
  const inputElement = getByRole('textbox');

  fireEvent.change(inputElement, { target: { value: 'Test City' } });

  expect(inputElement.value).toBe('Test City');
});

test('handles form submission and sets cel state', () => {
  const { getByRole } = render(<Search />);
  const inputElement = getByRole('textbox');
  const submitButton = getByRole('button', { name: /search/i });

  fireEvent.change(inputElement, { target: { value: 'Test City' } });
  fireEvent.click(submitButton);

  // You might want to add more assertions based on your component's behavior
  expect(inputElement.value).toBe(''); // Input is cleared after submission
  // Check if cel state is updated as expected
  // Add assertions based on the actual behavior of your component
});

test('renders select component with correct number of options', () => {
  const { getByTestId } = render(<Search />);
  const selectElement = getByTestId('mock-select');
  expect(selectElement.textContent).toBe('0 options'); // Update this based on your expected behavior
});
