import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './';

export default class Header extends Component {
  onAddChat = text => {
    alert('On chat clicked');
  };

  render() {
    return (
      <header className="header">
        <h1>An awesome chat app</h1>
        <Button text="Add chat" onClick={this.onAddChat} />
      </header>
    );
  }
}
