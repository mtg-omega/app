import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

import config from '../config';

import Launch from '../containers/launch/LaunchContainer';
import Authenticate from '../containers/auth/AuthenticateView';
import Drawer from '../containers/drawer/DrawerContainer';
import Home from '../containers/home/HomeView';

export default Actions.create(
  <Scene key={'root'}>
    <Scene
      hideNavBar
      key={'splash'}
      component={Launch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    <Scene key={'authenticate'} hideNavBar>
      <Scene
        key={'authLanding'}
        component={Authenticate}
        type={ActionConst.RESET}
        analyticsDesc={'Authenticate: Authentication'}
      />
    </Scene>

    {/* Main App */}
    <Scene key={'app'} type={ActionConst.RESET}>
      <Scene key={'home'} component={Drawer}>
        <Scene
          key={'homepage'}
          component={Home}
          title={config.app.name}
          analyticsDesc={'Homepage'}
        />
      </Scene>
    </Scene>
  </Scene>,
);
