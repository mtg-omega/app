import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.container}>
        Home page
      </Text>
    </View>
  );
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Home);
