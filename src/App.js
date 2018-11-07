import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Container />
      </div>
    );
  }
}

export default App;
