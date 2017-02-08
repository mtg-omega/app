import React from 'react';
import { Container, Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem button onPress={Actions.home}>
            <Text>Home</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
