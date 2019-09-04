import React from "react"
import {View} from "react-native"

export default class TestFlex extends React.Component {
  render() {
    return (
      <View style={{flex: 1, height: 500, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <View style={{width: 50, height: 50, backgroundColor: "powderblue", alignSelf: "center"}} />
        <View style={{width: 50, height: 50, backgroundColor: "skyblue"}} />
        <View style={{width: 50, height: 50, backgroundColor: "steelblue"}} />
      </View>
    )
  }
}

/**
 * JIsaodjsaidoji
 * @param {string} a
 * @param {string} b
 * @return {string} 结果
 */
function aaa(a, b) {
  return a + b
}


aaa()
