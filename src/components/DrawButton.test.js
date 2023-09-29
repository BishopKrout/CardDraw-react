import { render, screen, fireEvent } from '@testing-library/react';
import DrawButton from './DrawButton';

test('renders draw button and handles click', () => {
  const handleDraw = jest.fn();
  render(<DrawButton onDraw={handleDraw} isShuffling={false} />);
  const drawButton = screen.getByText(/draw a card/i);
  fireEvent.click(drawButton);
  expect(handleDraw).toHaveBeenCalled();
});

