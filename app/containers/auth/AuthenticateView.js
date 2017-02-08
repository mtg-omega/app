import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Login() {
  return (
    <TouchableHighlight onPress={Actions.app} style={{ flex: 1 }}>
      <Text style={styles.container}>
        Skip Login!!
      </Text>
    </TouchableHighlight>
  );
}
