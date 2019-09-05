/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { useScreens } from "react-native-screens"
// import App from './App';
// import App from "./jsProSrc/sampleAppMovies/App"
import App from "_$$_jsProSrc/learnReactNavigation/CreateAStackNav"
import {name as appName} from './app.json';

useScreens() // 使用 react-native-screens
// TODO https://reactnavigation.org/docs/en/tab-based-navigation.html
AppRegistry.registerComponent(appName, () => App);
