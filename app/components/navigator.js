import React from 'react';
import { StyleSheet, Navigator } from 'react-native';

import Home from './home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class Nav extends React.Component {
  static renderScene(route, navigator) {
    return <Home navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{}}
        renderScene={Nav.renderScene}
      />
    );
  }
}
