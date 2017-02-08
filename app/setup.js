import React from 'react';
import { connect, Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import configureStore from './store/configureStore';
import AppRoutes from './navigation';
import theme from './theme';

const RouterWithRedux = connect()(Router);

export default function setup(): React.ReactClass<{}> {
  // init relay (?)
  // init facebook sdk (?)

  class Root extends React.Component {
    constructor() {
      super();

      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }

      return (
        <Provider store={this.state.store}>
          <RouterWithRedux scenes={AppRoutes} style={theme.styles.appContainer} />
        </Provider>
      );
    }
  }

  return Root;
}
