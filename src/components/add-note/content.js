import React from "react";
import { TextInput } from "react-native";

const Content = props => (
    <TextInput
        value={props.value}
        onChangeText={props.onChangeTextContent}
        style={
            { backgroundColor: props.colorSelected }
        }

    />

)




export default Content;