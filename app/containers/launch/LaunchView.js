import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LaunchView extends React.Component {
  static propTypes = {
    autoLogin: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log('Launch');

    this.props.autoLogin()
      .then(() => Actions.app({ type: 'reset' }))
      .catch(() => Actions.authenticate({ type: 'reset' }));
  }

  render() {
    return (
      <View>
        <ActivityIndicator animating size={'large'} color={'#C1C5C8'} />
      </View>
    );
  }
};
