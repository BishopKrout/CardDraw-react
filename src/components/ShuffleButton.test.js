import { render, screen, fireEvent } from '@testing-library/react';
import ShuffleButton from './ShuffleButton';

test('renders shuffle button and handles click', () => {
  const handleShuffle = jest.fn();
  render(<ShuffleButton onShuffle={handleShuffle} isShuffling={false} />);
  const shuffleButton = screen.getByText(/shuffle deck/i);
  fireEvent.click(shuffleButton);
  expect(handleShuffle).toHaveBeenCalled();
});

