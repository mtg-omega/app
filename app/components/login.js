import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { skipLogin } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Login extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSkipLogin = this.handleSkipLogin.bind(this);
  }

  handleSkipLogin() {
    this.props.dispatch(skipLogin());
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handleSkipLogin} style={{ flex: 1 }}>
        <Text style={styles.container}>
          Skip Login
        </Text>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Login);
