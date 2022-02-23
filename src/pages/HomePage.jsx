import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { setUserMsg } from '../store/user/user.action';


export function HomePage() {
  // const dispatch = useDispatch();

  // const onClickUserMsg = () => {
  //   dispatch(setUserMsg({ txt: 'Hello!', type: 'info' }))
  // }


  return (
    <section className="home-page">
      <h1>Home</h1>

      {/* <button onClick={() => {
        onClickUserMsg()
      }}>User Msg</button> */}

    </section>
  );
}
