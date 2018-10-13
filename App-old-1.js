import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

/* lifecycle react */
/*

1. constructor
2. componentDidMount
3. componentDidUpdate
4. shouldComponentUpdate

*/
// export function Content() {
//   return (
//     <Text>Content</Text>
//   )
// }

// export const Content = () => {
//   return (
//     <Text>Content</Text>
//   )
// }
export const name = "zuli";
export const Content = () => <Text>Content</Text>;

export class Title extends Component {
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.name == "zuli") {
      // alert("nama sebelumnya zuli");
    }
  }

  render() {
    return <Text>Judul {this.props.name}</Text>;
  }
}

export default class App extends Component {
  state = {
    name: "zuli"
  };

  constructor() {
    super();
    this.name = "zuli";
  }

  componentDidMount() {
    this.name = "zuli";
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.name == "zuli") {
      this.name = "siti zuliatul";
      // this.forceUpdate();
    }
  }

  onClick = () => {
    let { name } = this.state;
    if (name === "zuli") {
      name = "siti zuliatul";
    } else {
      name = "zuli";
    }
    this.setState(
      {
        name: name
      }
      // () => alert("state berhasil diubah")
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Title name={this.state.name} />
        <Button
          title={`Ubah title (${this.props.name})`}
          onPress={this.onClick}
        />
        <Text>This name : {this.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
