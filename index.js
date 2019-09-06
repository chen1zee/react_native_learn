/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { useScreens } from "react-native-screens"
// import App from './App';
// import App from "./jsProSrc/sampleAppMovies/App"
// import App from "_$$_jsProSrc/learnReactNavigation/CreateAStackNav"
// import App from "_$$_jsProSrc/learnReactNavigation/TabBasedNavi"
// import App from "_$$_jsProSrc/learnReactNavigation/drawerBasedNavi"
import App from "_$$_jsProSrc/learnReactNavigation/AuthFlow"
import {name as appName} from './app.json';
// TODO https://reactnative.cn/docs/images/
// TODO 使用混合 App 的图片资源

useScreens() // 使用 react-native-screens
AppRegistry.registerComponent(appName, () => App);
