import React from 'react';

export const url = (endpoint = '') =>
  `https://headlight-tournament-3.herokuapp.com/${endpoint}`;

export const toPercent = x => (x * 100) + '%';

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
