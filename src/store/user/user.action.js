import {userService} from '../../services/user.service.js';

export function loadUsers() {
  return async dispatch => {
    try {
      const users = await userService.query();
      dispatch({type: 'SET_USERS', users});
    } catch (err) {
      console.log('Cannot load useres', err);
    }
  };
}

export function updateUser(updatedUser) {
  return async dispatch => {
    try {
      const user = await userService.updateUser(updatedUser);
      dispatch({type: 'UPDATE_USER', user});
    } catch (err) {
      console.log('Cannot update user');
    }
  };
}

export function addUser(userToAdd) {
  return async dispatch => {
    try {
      const savedUser = await userService.addUser(userToAdd);
      dispatch({type: 'ADD_USER', user: savedUser});
    } catch (err) {
      console.log('Cannot add user', err);
    }
  };
}

export function removeUser(id) {
  return async dispatch => {
    try {
      await userService.removeUser(id);
      dispatch({type: 'REMOVE_USER', id});
    } catch (err) {
      console.log('Cannot remove user', err);
    }
  };
}

export function setUserMsg(props) {
  const txt = props ? props.txt : null;
  const type = props ? props.type : null;
  return dispatch => {
    dispatch({type: 'SET_MSG', userMsg: {txt, type}});
  };
}
