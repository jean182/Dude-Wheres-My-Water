import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from './components/screens/Home';

class Application extends Component {
  componentDidMount() {
    if (__DEV__) {
      const DevMenu = require('react-native-dev-menu');
      const { navigation } = this.props;
      DevMenu.addItem('Stories', () => navigation.navigate('STORYBOOK'));
    }
  }

  render() {
    const navigation = this.props;
    return <Home navigation={navigation} />;
  }
}

Application.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Application;
