import React from "react"
import {View, Text, Button} from "react-native"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"

const ROUTES = {
  Home: "Home",
  Notifications: "Notifications"
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: ROUTES.Home,
    drawerIcon: ({tintColor}) => (
      <View style={{width: 24, height: 24, backgroundColor: "red"}}>
        <Text>{ROUTES.Home}</Text>
      </View>
    )
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate(ROUTES.Notifications)}
        title="Go to notifications" />
    )
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: ROUTES.Notifications,
    drawerIcon: ({tintColor}) => (
      <View style={{width: 24, height: 24, backgroundColor: tintColor}}>
        <Text>{ROUTES.Notifications}</Text>
      </View>
    )
  }
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home" />
    )
  }
}

export default createAppContainer(
  createDrawerNavigator({
    [ROUTES.Home]: { screen: MyHomeScreen },
    [ROUTES.Notifications]: { screen: MyNotificationsScreen }
  })
)
