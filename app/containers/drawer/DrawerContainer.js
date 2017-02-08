import { connect } from 'react-redux';

import { closeDrawer } from '../../actions';
import DrawerView from './DrawerView';

export default connect(
  state => ({
    isDrawerOpen: state.drawer.isOpen,
  }),
  {
    closeDrawer,
  },
)(DrawerView);
