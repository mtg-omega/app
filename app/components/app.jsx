import React from 'react';
import { connect } from 'react-redux';

import Nav from './navigator';

function App() {
  return (
    <Nav />
  );
}

function initialize(/* store */) {
  return {};
}

export default connect(initialize)(App);
