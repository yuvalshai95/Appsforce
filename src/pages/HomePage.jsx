import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router'

// Actions
import { loadUsers, removeUser } from '../store/user/user.action.js'


// Cmps
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



  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId))
  }

  const handleEditUser = (id) => {
    navigate(`edit/${id}`)
  }

  const handleAddUser = () => {
    navigate('edit')
  }

  return (
    <>
      <Outlet />

      <section className="home-page">
        <UserFilter />

        <div className="add-user flex justify-center align-center">
          <button className="primary-btn" onClick={handleAddUser}>Add User</button>
        </div>

        <UserList
          users={users}
          handleEditUser={handleEditUser}
          handleRemoveUser={handleRemoveUser}
        />

      </section>
    </>
  );
}
