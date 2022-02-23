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

    case 'UPDATE_USER':
      return (newState = {
        ...state,
        users: state.users.map(user => (user.id === action.user.id ? action.user : user)),
      });

    case 'SET_MSG':
      return (newState = {...state, userMsg: action.userMsg});

    default:
      return newState;
  }
}
