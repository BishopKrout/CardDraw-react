import React from 'react';

function DrawButton({ onDraw, isShuffling }) {
    return (
        <button onClick={onDraw} disabled={isShuffling}>
            Draw a Card
        </button>
    );
}

export default DrawButton;