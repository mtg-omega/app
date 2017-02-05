import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';

import Login from './login';
import Home from './home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class Nav extends Component {
  static navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} />);

      case 'home':
        return (<Home navigator={navigator} />);

      default:
        return null;
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'login' }}
        renderScene={Nav.navigatorRenderScene}
      />
    );
  }
}
