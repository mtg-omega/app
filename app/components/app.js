import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Login from './login';
import Nav from './navigator';

function App(props) {
  if (!props.isLoggedIn) {
    return <Login />;
  }

  return (
    <Nav />
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

function initialize(store) {
  return {
    isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin,
  };
}

export default connect(initialize)(App);
