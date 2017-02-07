import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.container}>
          Home page
        </Text>
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function initialize(/* store */) {
  return {};
}

export default connect(initialize)(Home);
