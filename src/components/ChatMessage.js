import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ text, date, isMyText }) => (
  <div
    style={{
      textAlign: isMyText ? 'right' : 'left',
    }}
  >
    <span>Sent on {date.toString()}</span>
    <p>{text}</p>
  </div>
);

ChatMessage.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isMyText: PropTypes.number.bool,
};

export default ChatMessage;
