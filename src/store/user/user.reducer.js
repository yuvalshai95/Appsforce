
const initialState = {
  users: null,
  filterBy: null,
  userMsg: null
};

export function userReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_MSG':
      return (newState = { ...state, userMsg: action.userMsg });

    default:
      return newState;
  }
}
