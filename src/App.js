import React, { Fragment } from 'react';
import Layout from './components/layout/Layout';
import User from './components/Users/User';
import UserList from './components/Users/UserList';
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/random-user" element={<User/>} />
          <Route path={"/users"} element={<UserList/>} />
          <Route
              path="*"
              element={<Navigate to="/random-user" />}
          />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
