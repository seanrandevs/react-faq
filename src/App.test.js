import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Frequently Asked Questions link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Frequently Asked Questions/i);
  expect(linkElement).toBeInTheDocument();
});
