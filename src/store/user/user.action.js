

export function setUserMsg(props) {
  const txt = (props) ? props.txt : null
  const type = (props) ? props.type : null
  return dispatch => {
    dispatch({ type: 'SET_MSG', userMsg: { txt, type } });
  };
}