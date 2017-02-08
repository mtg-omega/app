import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'native-base';
import { DefaultRenderer } from 'react-native-router-flux';

import SideBar from './SideBarView';

export default class DrawerView extends React.Component {
  static propTypes = {
    isDrawerOpen: React.PropTypes.bool.isRequired,
    closeDrawer: React.PropTypes.func.isRequired,

    navigationState: React.PropTypes.shape({}).isRequired,
    onNavigate: React.PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    console.log(this.props);

    if (this.props.isDrawerOpen) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }

  closeDrawer() {
    if (this.props.isDrawerOpen) {
      this.props.closeDrawer();
    }
  }

  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        type={'overlay'}
        tweenDuration={150}
        content={<SideBar />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={ratio => ({
          drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
          main: {
            opacity: (2 - ratio) / 2,
          },
        })}
        negotiatePan
      >
        <View style={{ backgroundColor: '#000', flex: 1 }}>
          <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
        </View>
      </Drawer>
    );
  }
}
