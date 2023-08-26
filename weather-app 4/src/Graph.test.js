import React from 'react';
import { render } from '@testing-library/react';
import Graph from './Graph';

// Mock Chart.js to prevent actual chart creation in tests
jest.mock('chart.js', () => ({
  Chart: jest.fn(),
}));

test('renders graph component', () => {
  const mockData = {
    city: {
      name: 'Test City',
      country: 'TC',
    },
    list: [
      { main: { temp_min: 10, temp_max: 20 }, dt: 1630000000 },
      // Add more sample data here as needed
    ],
  };

  const { getByText } = render(<Graph data={mockData} dayIndex={0} />);
  const graphElement = getByText(/Graph Item component/i);
  expect(graphElement).toBeInTheDocument();
});
