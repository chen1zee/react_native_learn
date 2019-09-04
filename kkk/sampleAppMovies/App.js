import React from "react"
import { Platform, Image, StyleSheet, Text, View, FlatList } from "react-native"

const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json"

export default class App extends React.Component {
  state = {
    movies: null
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData = async () => {
    try {
      let res = await fetch(REQUEST_URL)
      res = await res.json()
      this.setState({
        movies: res.movies
      })
    } catch (e) {
      console.log(e)
    }
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据...</Text>
      </View>
    )
  }
  renderMovie({item: movie}) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  }
  render() {
    const {movies} = this.state
    if (!movies) return this.renderLoadingView()
    return (
      <FlatList
        data={movies} renderItem={this.renderMovie}
        style={styles.list} keyExtractor={item => item.id}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  thumbnail: {
    width: 53, height: 81
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20, marginBottom: 8, textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  list: {
    paddingTop: 20,
    ...Platform.select({
      ios: { backgroundColor: "#F5FCFF" },
      android: { backgroundColor: "blue" }
    })
  }
})
