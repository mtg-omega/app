import React from 'react';
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
  isLoggedIn: React.PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn || state.user.hasSkippedLogin,
});

export default connect(mapStateToProps)(App);
