import React from 'react';
import { Image } from 'react-native';
import { Container, View, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const background = require('../../images/authenticate.jpg');

export default function Login() {
  return (
    <Container style={{ backgroundColor: '#ff0' }}>
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f0f' }}>
        <Content style={{ backgroundColor: '#0ff' }}>
          <Image source={background} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}>
            <View style={{ flex: 1 }}>
              <Button onPress={Actions.app} style={{ alignSelf: 'center' }}>
                <Text>Skip Login</Text>
              </Button>
            </View>
          </Image>
        </Content>
      </View>
    </Container>
  );
}
