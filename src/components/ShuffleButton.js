import React from 'react';

function ShuffleButton({ onShuffle, isShuffling }) { 
   return (
    <button onClick={onShuffle} disabled={isShuffling}>
        Shuffle Deck
    </button>
   ); 
}

export default ShuffleButton;