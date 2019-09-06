import React from "react"
import {SafeAreaView, StatusBar, Text, Button} from "react-native"

class Screen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: "#6a51qe"}]}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text>123</Text>
      </SafeAreaView>
    )
  }
}


const styles = {
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  }
}
