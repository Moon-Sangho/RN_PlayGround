import { name as appName } from './app.json';
import App from './src/App';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
