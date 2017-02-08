import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Home() {
  console.log('Home');

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.container}>
        Home page
      </Text>
    </View>
  );
}
