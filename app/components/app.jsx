import React from 'react';
import { connect } from 'react-redux';

import Login from './login';
import Nav from './navigator';

function App() {
  if (this.props.isLoggedIn) {
    return <Login />;
  }

  return (
    <Nav />
  );
}

function initialize(store) {
  return {
    isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin,
  };
}

export default connect(initialize)(App);
