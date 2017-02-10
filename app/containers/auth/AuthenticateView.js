import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, View, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const background = require('../../images/authenticate.jpg');

const deviceHeight = Dimensions.get('window').height;

export default function Login() {
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Image source={background} style={{ flex: 1, width: null, height: null }}>
          <View style={{ paddingTop: deviceHeight / 1.75 }}>
            <Button rounded small onPress={Actions.app} style={{ alignSelf: 'center' }}>
              <Text>Skip Login</Text>
            </Button>
          </View>
        </Image>
      </View>
    </Container>
  );
}
