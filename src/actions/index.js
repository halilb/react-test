import * as types from '../constants/ActionTypes';

export const sendMessage = text => ({
  type: types.SEND_MESSAGE,
  text,
  date: new Date(),
  isMyText: true,
});
