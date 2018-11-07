import React from 'react';

export const url = (endpoint = '') =>
  `https://headlight-tournament-3.herokuapp.com/${endpoint}`;

const toPercent = x => (x * 100) + '%';

export const Node =
  (key, nodeTop, nodeLeft, value, gridSize = 20) => {
    const top = toPercent(nodeTop/gridSize);
    const left = toPercent(nodeLeft/gridSize);
    const width = (100 / gridSize) + '%';
    const height = width;

    return <div
      key={key}
      style={{top, left, width, height}}
      className='node'>
      {value}
    </div>
};

export const Bot =
  (key, botTop, botLeft, gridSize = 20) => {
    const initials = key.split('')
                        .filter(ch => ch === ch.toUpperCase())
                        .join('');
    const top = toPercent(botTop / gridSize),
          left = toPercent(botLeft / gridSize),
          width = (100 / gridSize) + '%',
          height = width;
    
    return <div
      key={key}
      style={{top, left, width, height}}
      className='bot'>
        {initials}
      </div>
};
