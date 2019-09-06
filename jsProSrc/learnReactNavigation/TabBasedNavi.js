import React from "react"
import {Text, View, Button} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import {createStackNavigator} from "react-navigation-stack"

const TAB_ROUTE = {
  Home: "Home",
  Details: "Details",
  Settings: "Settings"
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Details</Text>
      </View>
    )
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Home</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate(TAB_ROUTE.Settings)}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate(TAB_ROUTE.Details)}
        />
      </View>
    )
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Settings</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate(TAB_ROUTE.Home)}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate(TAB_ROUTE.Details)}
        />
      </View>
    )
  }
}

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props
    return (
      <View style={{width: 24, height: 24, margin: 5}}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: "absolute", right: -6, top: -3,
              borderRadius: 6, width: 12, height: 12,
              justifyContent: "center", alignItems: "center"
            }}>
            <Text style={{color: "white", fontSize: 10, fontWeight: "bold"}}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const HomeIconWithBadge = props => <IconWithBadge {...props} badgeCount={3} />

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state
  let IconComponent = Ionicons
  let iconName
  if (routeName == TAB_ROUTE.Home) {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`
    IconComponent = HomeIconWithBadge
  } else if (routeName == TAB_ROUTE.Settings) {
    iconName = `ios-star${focused ? "" : "-outline"}`
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />
}

const HomeStack = createStackNavigator({
  [TAB_ROUTE.Home]: HomeScreen,
  [TAB_ROUTE.Details]: DetailsScreen
})

const SettingsStack = createStackNavigator({
  [TAB_ROUTE.Settings]: SettingScreen,
  [TAB_ROUTE.Details]: DetailsScreen
})

export default createAppContainer(
  createBottomTabNavigator(
    {
      [TAB_ROUTE.Home]: { screen: HomeStack },
      [TAB_ROUTE.Settings]: { screen: SettingsStack }
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({ focused, tintColor }) => (
          getTabBarIcon(navigation, focused, tintColor)
        )
      }),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    }
  )
)
