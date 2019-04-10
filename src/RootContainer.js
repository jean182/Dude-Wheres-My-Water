import React from 'react';
import { createAppContainer } from 'react-navigation';
import Navigator from './navigation';

const Navigation = createAppContainer(Navigator);

const RootContainer = () => <Navigation />;

export default RootContainer;
