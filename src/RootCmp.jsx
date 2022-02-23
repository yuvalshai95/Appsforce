import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Cmps
import { AppHeader } from './cmps/AppHeader';
import { UserMsg } from './cmps/UserMsg';
import { HomePage } from './pages/HomePage.jsx';
import { UserEdit } from './pages/UserEdit.jsx';

export function RootCmp() {



  return (
    <div className='root-cmp'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}>
            {/* EDIT USER  */}
            <Route path='edit/:userId' element={<UserEdit />} />
            {/* ADD USER */}
            <Route path='edit' element={<UserEdit />} />
          </Route>
        </Routes>
      </main>
      <UserMsg />
    </div >
  );
}

export default RootCmp;
