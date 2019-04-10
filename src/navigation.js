import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Application from './Application';
import StorybookUIRoot from '../storybook';
import Exit from './components/partials/Exit';

const navigationOptions = {
  header: null,
};

const exit = ({ navigation }) => ({
  headerRight: <Exit navigation={navigation} />,
});

const routes = {
  HOME: {
    screen: Application,
    navigationOptions,
  },
  STORYBOOK: {
    screen: StorybookUIRoot,
    exit,
  },
};

export default createStackNavigator(routes);
