import React, { Component } from 'react';
import { url, Node } from '../../helper';

export default class Nodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
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
        {
          this.state.nodes.map(
            node => {
              const location = node.Location;
              const id = node.Id,
                    top = location.X,
                    left = location.Y,
                    value = node.Value;

              return Node(id, top, left, value);
            }
          )
        }
      </div>
    );
  }
}
