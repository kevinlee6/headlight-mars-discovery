import React, { Component } from 'react';
import { url } from '../helper';
import { Info } from './Info/Info'; 
import { Map } from './Map/Map';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
    };
  }

  componentDidMount = () => {
    setInterval(this.callBots, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.callBots);
  }

  callBots = () => {
    fetch(url('bots'))
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
      <div className='content-container row'>
        <Info bots={this.state.bots} />
        <Map bots={this.state.bots} />
      </div>
    );
  }
}
