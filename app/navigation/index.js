import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

import config from '../config';
import theme from '../theme';

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
    <Scene key={'app'} title={config.app.name} type={ActionConst.RESET}>
      <Scene key={'drawer'} component={Drawer}>
        <Scene key={'dummy'}>
          <Scene key={'home'} component={Home} title={'Home'} analyticsDesc={'Homepage'} initial sceneStyle={{ paddingTop: theme.sizes.navbarHeight }}/>
        </Scene>
      </Scene>
    </Scene>
  </Scene>,
);
