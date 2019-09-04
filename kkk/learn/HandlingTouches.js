import React from "react"
import {Alert, Button, StyleSheet, View} from "react-native"

export default class ButtonBasics extends React.Component {
  _onPressButton = () => {
    Alert.alert("title", "you tapped the button")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="press me" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="press me" color="#841584" />
        </View>
        <View style={styles.alertnativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="this looks great!" />
          <Button onPress={this._onPressButton} title="OK" color="#841584" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  alertnativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
