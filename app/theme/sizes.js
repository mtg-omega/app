import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default {
  login: {
    paddingTop: deviceHeight / 1.75,
  },

  navbarHeight: (Platform.OS === 'ios') ? 64 : 54,
};
