import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

export class FlatListBasics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{height: 100}}
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "skyblue"
  }
})

