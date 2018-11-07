import React from 'react';
import Nodes from './Nodes';
import { Bots } from './Bots';

export const Map = props => (
  <div className='map'>
    <Nodes />
    <Bots bots={props.bots} />
  </div>
);
