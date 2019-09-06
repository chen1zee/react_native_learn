import React from "react"
import {View, Button, StyleSheet, ActivityIndicator, StatusBar, Text} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";

const ROUTES = {
  App: "App",
  Home: "Home",
  Other: "Other",
  Auth: "Auth",
  AuthLoading: "AuthLoading",
  SignIn: "SignIn"
}

const STORAGES = {
  userToken: 'userToken'
}

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
        <Button
          title="test go AuthLoading"
          onPress={() => this.props.navigation.navigate(ROUTES.AuthLoading)} />
      </View>
    )
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem(STORAGES.userToken, "abc")
    this.props.navigation.navigate(ROUTES.App)
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome to the app"
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out" onPress={this._signOutAsync} />
      </View>
    )
  }
  _showMoreApp = () => {
    this.props.navigation.navigate(ROUTES.Other)
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate(ROUTES.Auth)
  }
}

class OtherScreen extends React.Component {
  static navigatoinOptions = {
    title: "Lots of feature here"
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
      </View>
    )
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate(ROUTES.Auth)
  }
}

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync()
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="dark-content" hidden={true} />
        <Text>123</Text>
      </View>
    )
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(STORAGES.userToken)
    console.log("herere")
    setTimeout(() => {
      this.props.navigation.navigate(userToken ? ROUTES.App : ROUTES.Auth)
    }, 1500)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center"
  }
})

const AppStack = createStackNavigator({
  [ROUTES.Home]: HomeScreen,
  [ROUTES.Other]: OtherScreen
})

const AuthStack = createStackNavigator({
  [ROUTES.SignIn]: SignInScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      [ROUTES.AuthLoading]: AuthLoadingScreen,
      [ROUTES.App]: AppStack,
      [ROUTES.Auth]: AuthStack
    },
    {
      initialRouteName: ROUTES.AuthLoading
    }
  )
)
