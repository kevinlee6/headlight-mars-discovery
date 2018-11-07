import React from 'react';

export const TableBody = props => (
  <tbody>
    {
      props.bots.map(bot =>
        <tr key={bot.Id}>
          <td>{bot.Id}</td>
          <td>{bot.Score}</td>
        </tr>)
    }
  </tbody>
);
