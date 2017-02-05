import React from 'react';
import { StyleSheet, Image, TouchableHighlight, View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

class Home extends React.Component {
  _onPressButton() {
    this.props.navigator.push({ id: 'home' });
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton} style={{ flex: 1 }}>
        <Image source={this.props.frame} style={styles.container} />
      </TouchableHighlight>
    );
  }
}

function initialize(store) {
  return {
    frame: store.initialize.frame,
  };
}

export default connect(initialize)(Home);
