import React from 'react';
import { Image } from 'react-native';
import { Container, View, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import theme from '../../theme';

export default function Login() {
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Image
          source={theme.styles.login.background}
          style={{ flex: 1, width: null, height: null }}
        >
          <View style={{ paddingTop: theme.sizes.login.paddingTop }}>
            <Button rounded small onPress={Actions.app} style={{ alignSelf: 'center' }}>
              <Text>Skip Login</Text>
            </Button>
          </View>
        </Image>
      </View>
    </Container>
  );
}
