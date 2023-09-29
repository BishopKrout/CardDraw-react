import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

test('renders draw and shuffle buttons', () => {
  render(<App />);
  const drawButton = screen.getByText(/draw a card/i);
  const shuffleButton = screen.getByText(/shuffle deck/i);
  expect(drawButton).toBeInTheDocument();
  expect(shuffleButton).toBeInTheDocument();
});

test('draws a card and displays it', async () => {
  // Mocking a successful API response
  const mockSuccessResponse = {
    deck_id: 'deck123',
    remaining: 51,
    cards: [{ image: 'card-image-url', code: 'card-code' }]
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  render(<App />);
  const drawButton = screen.getByText(/draw a card/i);

  await act(async () => {
    fireEvent.click(drawButton);
  });

  // Wait for the card image to be added to the document
  const cardImage = await screen.findByAltText('card-code');
  expect(cardImage).toBeInTheDocument();
  expect(cardImage.src).toBe('http://localhost/card-image-url');

  // Clear the mock to ensure tests are completely isolated
  global.fetch.mockClear();
  global.fetch.mockRestore();
});
