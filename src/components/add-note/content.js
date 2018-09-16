import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    fontSize: 16,
    lineHeight: 24
  }
});

const Content = props => (
  <View style={[styles.container, { backgroundColor: props.colorSelected }]}>
    <TextInput
      autoFocus={true}
      multiline={true}
      value={props.value}
      onChangeText={props.onChangeTextContent}
      underlineColorAndroid={"transparent"}
      style={styles.input}
    />
  </View>
);

export default Content;
