import React from 'react';
import { Intro } from './Intro';
import { Legend } from './Legend';
import { Scores } from './Scores/Scores';

export const Info = props => (
  <div className='info col-md-4'>
    <Intro />
    <Legend />
    <Scores bots={props.bots} />
  </div>
);
