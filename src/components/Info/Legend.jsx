import React from 'react';

export const Legend = () => (
  <div className='legend'>
    <div className="legend-square-container">
      <div className='bot legend-square'>
        Bot
        <br />
        (initials)
      </div>
    </div>
    <div className="legend-square-container">
      <div className='node legend-square'>
        Node
        <br />
        (value)
      </div>
    </div>
  </div>
);
