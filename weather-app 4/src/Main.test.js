import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

// Mock the Search component
jest.mock('./Search', () => () => <div>Mocked Search Component</div>);

test('renders main component with title', () => {
  const { getByText } = render(<Main />);
  const mainElement = getByText(/My React Weather Application/i);
  expect(mainElement).toBeInTheDocument();
});

test('renders main component with mocked search', () => {
  const { getByText } = render(<Main />);
  const searchElement = getByText(/Mocked Search Component/i);
  expect(searchElement).toBeInTheDocument();
});

test('renders main component with body component', () => {
  const { getByText } = render(<Main />);
  const bodyElement = getByText(/Body component/i);
  expect(bodyElement).toBeInTheDocument();
});
