import React from "react";
import { TextInput, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    height: 10
  }
});

const Content = props => (
  <TextInput
    value={props.value}
    onChangeText={props.onChangeTextContent}
    style={[style.container, { backgroundColor: props.colorSelected }]}
  />
);

export default Content;
