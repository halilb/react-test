import { SEND_MESSAGE } from '../constants/ActionTypes';

const initialState = [
  {
    text: 'test',
    date: new Date(),
    isMyText: false,
  },
];

export default function history(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return [
        {
          text: action.text,
          date: action.date,
          isMyText: true,
        },
        ...state,
      ];
    default:
      return state;
  }
}
