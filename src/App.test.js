import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading for the route', () => {
  render(<App />);
  const headingElement = screen.getByText(/東京駅から名古屋駅までのルート/);
  expect(headingElement).toBeInTheDocument();
});
