import React from 'react';
import { render } from '@testing-library/react';
import Body from './Body';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        city: { name: 'Test City', country: 'TC' },
        list: [] // Add sample data here
      }),
  })
);

test('renders body component with API data', async () => {
  const { getByText } = render(<Body />);

  // Wait for API data to be fetched and component to render
  await waitFor(() => {
    expect(getByText(/Body component/i)).toBeInTheDocument();
  });

  // Add more assertions based on your component's behavior
  expect(getByText(/Test City - TC/i)).toBeInTheDocument();
  // Add assertions for WeatherItem components and Graph component
});
