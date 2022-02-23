import {userService} from '../../services/user.service.js';

export function loadUsers(filterBy) {
  if (!filterBy) filterBy = {email: '', name: '', location: ''};
  return async dispatch => {
    try {
      const users = await userService.query(filterBy);
      dispatch({type: 'SET_USERS', users});
    } catch (err) {
      console.log('Cannot load users', err);
    }
  };
}

export function setFilter(filterBy) {
  return dispatch => {
    dispatch({type: 'SET_FILTER', filterBy});
  };
}

export function updateUser(updatedUser) {
  return async dispatch => {
    try {
      const user = await userService.updateUser(updatedUser);
      dispatch({type: 'UPDATE_USER', user});
      dispatch(setUserMsg({txt: 'User Updated Successfully!', type: 'info'}));
    } catch (err) {
      console.log('Cannot update user', err);
      dispatch(setUserMsg({txt: 'Update failed!', type: 'warning'}));
    }
  };
}

export function addUser(userToAdd) {
  return async dispatch => {
    try {
      const savedUser = await userService.addUser(userToAdd);
      dispatch({type: 'ADD_USER', user: savedUser});
      dispatch(setUserMsg({txt: 'User Added Successfully!', type: 'info'}));
    } catch (err) {
      console.log('Cannot add user', err);
      dispatch(setUserMsg({txt: 'Add failed!', type: 'warning'}));
    }
  };
}

export function removeUser(id) {
  return async dispatch => {
    try {
      await userService.removeUser(id);
      dispatch({type: 'REMOVE_USER', id});
      dispatch(setUserMsg({txt: 'User Removed Successfully!', type: 'info'}));
    } catch (err) {
      console.log('Cannot remove user', err);
      dispatch(setUserMsg({txt: 'Remove failed!', type: 'warning'}));
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
