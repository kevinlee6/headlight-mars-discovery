import React from 'react';
import { TableBody } from './TableBody';

export const Scores = props => (
  <table className='table table-hover'>
    <thead>
      <tr>
        <th>Bot ID</th>
        <th>Score</th>
      </tr>
    </thead>
    <TableBody bots={props.bots} />
  </table>
)
