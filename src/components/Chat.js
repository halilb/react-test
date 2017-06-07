import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import './Chat.css';

export default class Chat extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    onMessageSend: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      newMessage: '',
    };
  }

  handleChange = e => {
    this.setState({ newMessage: e.target.value });
  };

  handleKeyPress = target => {
    // enter key code
    if (target.charCode == 13) {
      const { onMessageSend } = this.props;
      const { newMessage } = this.state;
      this.props.onMessageSend(newMessage);
      this.setState({ newMessage: '' });
    }
  };

  render() {
    const { messages } = this.props;
    const { newMessage } = this.state;

    return (
      <div className="Chat">
        {messages.map((m, index) => (
          <ChatMessage
            key={`message_${index}`}
            text={m.text}
            date={m.date}
            isMyText={m.isMyText}
          />
        ))}
        <textarea
          placeholder="Type your message here and press enter to send..."
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={newMessage}
        />
      </div>
    );
  }
}
