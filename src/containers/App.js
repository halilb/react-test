import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Chat, Header, HistoryList } from '../components';
import * as ChatActions from '../actions';
import './App.css';

const App = ({ history, actions }) => {
  // this will change when multiple chats are implemented
  const currentChat = history;

  return (
    <div className="App">
      <Header />
      <HistoryList />
      <Chat messages={currentChat} onMessageSend={actions.sendMessage} />
    </div>
  );
};

const mapStateToProps = state => ({
  history: state.history,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ChatActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
