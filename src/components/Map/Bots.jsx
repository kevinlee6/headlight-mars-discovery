import React from 'react';
import { Bot } from '../../helper';

export const Bots = props => (
  <div className='bots'>
    {
      props.bots.map(
        bot => {
          const location = bot.Location;
          const id = bot.Id,
                top = location.Y,
                left = location.X;

          return Bot(id, top, left);
        }
      )
    }
  </div>
);
