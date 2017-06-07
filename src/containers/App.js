import React, { Component } from 'react';
import { Chat, Header, HistoryList } from '../components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HistoryList />
        <Chat />
      </div>
    );
  }
}

export default App;
