import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import DefaultStoryView from '../../decorators/DefaultStoryView';

const styles = {
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

storiesOf('Home', module).add('default view', () => (
  <DefaultStoryView>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>HOLA</Text>
  </DefaultStoryView>
));
