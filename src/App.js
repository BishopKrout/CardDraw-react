import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import ShuffleButton from './components/ShuffleButton';
import DrawButton from './components/DrawButton';
import './App.css';

function App() {
  const [deckId, setDeckId] = useState('');
  const [card, setCard] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    async function fetchDeck() {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
      const data = await response.json();
      setDeckId(data.deck_id);
    }
    fetchDeck();
  }, []);

  const drawCard = async () => {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
    const data = await res.json();
    if (data.remaining === 0) {
      alert('Error: no cards remaining');
    } else {
      setCard(data.cards[0]);
    }
  };

  const shuffleDeck = async () => {
    setIsShuffling(true);
    await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    setCard(null);
    setIsShuffling(false);
  };

  return (
    <div className="App">
      <DrawButton onDraw={drawCard} isShuffling={isShuffling} />
      <ShuffleButton onShuffle={shuffleDeck} isShuffling={isShuffling} />
      {card && <Card card={card} />}
    </div>
  );
}

export default App;