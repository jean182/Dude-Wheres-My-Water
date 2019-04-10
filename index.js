import { AppRegistry } from 'react-native';
import RootContainer from './src/RootContainer';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => RootContainer);
