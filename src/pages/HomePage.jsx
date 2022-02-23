import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router'

// Actions
import { loadUsers, removeUser } from '../store/user/user.action.js'
import { setUserMsg } from '../store/user/user.action';

// Cmps
import { Loader } from '../cmps/Loader.jsx';
import { UserList } from '../cmps/UserList.jsx';
import { UserFilter } from '../cmps/UserFilter.jsx'



export function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector(state => state.userModule.users);
  const filterBy = useSelector(state => state.userModule.filterBy);

  useEffect(() => {
    dispatch(loadUsers(filterBy))
  }, [filterBy])

  // const onClickUserMsg = () => {
  //   dispatch(setUserMsg({ txt: 'Hello!', type: 'info' }))
  // }

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId))
  }

  const handleEditUser = (id) => {
    navigate(`edit/${id}`)
  }

  const handleAddUser = () => {
    navigate('edit')
  }

  // if (!users) return <Loader />

  return (
    <>
      <Outlet />
      <section className="home-page">
        <h1>Users App</h1>
        <UserFilter />
        <button onClick={handleAddUser}>Add User</button>
        <UserList
          users={users}
          handleEditUser={handleEditUser}
          handleRemoveUser={handleRemoveUser}
        />


        {/* <button onClick={() => {
        onClickUserMsg()
      }}>User Msg</button> */}

      </section>
    </>
  );
}
