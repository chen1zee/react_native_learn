import React from "react"
import {View, TextInput, Text} from "react-native"

export default class PizzaTranslator extends React.Component {
  state = {
    text: ""
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}} placeholder="Type here to translate"
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map(word => word && '🍕')}
        </Text>
      </View>
    )
  }
}
