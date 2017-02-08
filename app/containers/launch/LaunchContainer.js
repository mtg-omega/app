import { connect } from 'react-redux';

import { autoLogin } from '../../actions';
import LaunchView from './LaunchView';

export default connect(
  null,
  {
    autoLogin,
  },
)(LaunchView);
