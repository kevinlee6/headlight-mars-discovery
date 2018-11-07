import React from 'react';

export const Info = props => (
  <div>
    <h1>Mars Challenge</h1>
    <p>Sample React.js app that pulls node and bot info from Headlights API.</p>
    <p>URL used: {url}</p> 
    <p>Endpoints (GET): nodes or bots</p>
    <Scoreboard bots={props.bots} />
  </div>
);
