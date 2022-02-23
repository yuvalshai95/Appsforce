import {userService} from '../../services/user.service.js';

export function loadUsers() {
  return async dispatch => {
    const users = await userService.query();
    dispatch({type: 'SET_USERS', users});
  };
}

export function setUserMsg(props) {
  const txt = props ? props.txt : null;
  const type = props ? props.type : null;
  return dispatch => {
    dispatch({type: 'SET_MSG', userMsg: {txt, type}});
  };
}
