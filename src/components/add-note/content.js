import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    fontSize: 18,
    lineHeight: 24
  }
});

const Content = props => (
  <View style={[style.container, { backgroundColor: props.colorSelected }]}>
    <TextInput
      autoFocus={true}
      value={props.value}
      onChangeText={props.onChangeTextContent}
      multiline={true}
      underlineColorAndroid="transparent"
      style={style.input}
    />
  </View>
);

export default Content;
