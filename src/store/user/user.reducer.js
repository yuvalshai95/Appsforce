const initialState = {
  users: [],
  filterBy: null,
  userMsg: null,
};

export function userReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_USERS':
      return (newState = {...state, users: [...action.users]});

    case 'SET_MSG':
      return (newState = {...state, userMsg: action.userMsg});

    default:
      return newState;
  }
}
