import React from "react"
import {View, Text, Button} from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{backgroundColor: "blue"}}>dsa</Text>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: "Home",
    headerTitle: <LogoTitle />,
    headerLeft: (
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Info" color="#fff"
      />
    ),
    headerRight: (
      <Button
        title="+1" color="#ddd"
        onPress={navigation.getParam("increaseCount")} />
    )
  })
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }
  state = {
    count: 0
  }
  _increaseCount = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details", {
            itemId: 86, otherParam: "anything you want here"
          })}
        />
      </View>
    )
  }
}

class MyModalScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 30}}>This is a modal</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: navigation.getParam("otherParam", "A Nested Details Screen"),
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      // headerTintColor: navigationOptions.headerStyle.backgroundColor
    }
  }
  componentDidMount() {
    this.didBlurSubscription = this.props.navigation.addListener("didBlur", payload => {
      console.log('detail;blur')
    })
  }
  componentWillUnmount() {
    console.log('will unmount')
    this.didBlurSubscription.remove()
  }
  render() {
    const {navigation} = this.props
    const itemId = navigation.getParam("itemId", "NO-ID")
    const otherParam = navigation.getParam("otherParam", "some default value")
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => {
            this.props.navigation.push("Details", {
              itemId: Math.floor(Math.random() * 100)
            })
          }}
        />
        <Button title="Go Home (use navigate)" onPress={() => this.props.navigation.navigate("Home")} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        <Button title="Update the title" onPress={() => this.props.navigation.setParams({ otherParam: "Updated" + Math.floor(Math.random() * 100) })} />
      </View>
    )
  }
}

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#f4511e" },
      headerTintColor: "#ccc",
      headerTitleStyle: { fontWeight: "bold" }
    },
  }
)

const RootStack = createStackNavigator(
  {
    Main: { screen: MainStack },
    MyModal: { screen: MyModalScreen }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
)


export default createAppContainer(RootStack)

