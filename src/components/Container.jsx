import React, { Component } from 'react';
import { url } from './global';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
    };
  }

  callBots = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const bots = res.Bots
          .sort((a,b) => 
            a.Id < b.Id ? -1 :
              a.Id > b.Id ? 1 :
              0);

        this.setState({bots});
      }) 
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
