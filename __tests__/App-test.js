import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Application from '../src/Application';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const navigation = { navigate: jest.fn() };
  renderer.render(<Application navigation={navigation} />);
});
