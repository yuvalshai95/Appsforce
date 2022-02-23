import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { loadUsers } from '../store/user/user.action.js'
import { setUserMsg } from '../store/user/user.action';

// Cmps
import { Loader } from '../cmps/Loader.jsx';


export function HomePage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userModule.users);

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  // const onClickUserMsg = () => {
  //   dispatch(setUserMsg({ txt: 'Hello!', type: 'info' }))
  // }


  if (!users.length) return <Loader />

  return (
    <section className="home-page">
      <h1>Users App</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      {/* <button onClick={() => {
        onClickUserMsg()
      }}>User Msg</button> */}

    </section>
  );
}
