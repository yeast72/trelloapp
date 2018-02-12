import { ADD_BOARD } from "../constants/ActionTypes";

const initialState = [
  {
    text: "Use Redux",
    id: 0
  }
];

export default function boards(state = initialState, action) {
  switch (action.type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id: state.reduce((maxId, board) => Math.max(board.id, maxId), -1) + 1,
          text: action.text
        }
      ];

    default:
      return state;
  }
}
