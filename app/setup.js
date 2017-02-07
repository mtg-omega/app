import React from 'react';
import { Provider } from 'react-redux';

import App from './components/app';
import configureStore from './store/configureStore';

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
          <App />
        </Provider>
      );
    }
  }

  return Root;
}
