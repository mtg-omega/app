import React from 'react';
import { Container, Content, Text, Card, CardItem, Body } from 'native-base';

export default function Home() {
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem header>
            <Text>Mtg News</Text>
          </CardItem>

          <CardItem>
            <Body>
              <Text>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Body>
          </CardItem>

          <CardItem footer>
            <Text>Share</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
