import React, { Component } from 'react';
import { url } from '../helper';

export default class Nodes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    setInterval(this.getNodes, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.getNodes);
  }

  getNodes = () => {
    fetch(url('nodes'))
      .then(res => res.json())
      .then(res => {
        const nodes = res.Nodes
          .sort((a,b) => 
            a.Id < b.Id ? -1 :
              a.Id > b.Id ? 1 :
              0);

        this.setState({nodes});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='nodes'>

      </div>
    );
  }
}