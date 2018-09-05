import React, { PureComponent } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableHighlight,
  Text
} from "react-native";
import PropTypes from "prop-types";

import ModalCustom from "../etc/modal-custom";

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5
  },
  wrapperInput: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: "solid"
  },
  input: {
    fontSize: 18
  },
  wrapperRectangle: {
    width: 45,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  rectangle: {
    width: "100%",
    height: "100%",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.5)",
    borderStyle: "solid"
  },
  wrapperListColors: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  colors: {
    width: "29%",
    margin: 5,
    height: 70
  }
});

const LIST_COLORS = ["#ffcd55", "#fa959f", "#555", "#cac8a0", "#718da5"];

class Header extends PureComponent {
  state = {
    isFocusTextInput: false,
    visibleListColors: false
  };

  onToggleTextInput = () => {
    const nextIsFocusTextInput = !this.state.isFocusTextInput;
    this.setState({
      isFocusTextInput: nextIsFocusTextInput
    });
    if (nextIsFocusTextInput) {
      this.titleInputRef.focus();
    } else {
      this.titleInputRef.blur();
    }
  };

  doToggleModalListColors = visibleListColors => () => {
    this.setState({
      visibleListColors
    });
  };

  onChangeColorSelected = hexCode => () => {
    this.setState(
      {
        visibleListColors: false
      },
      () => {
        this.props.onChangeColorSelected(hexCode);
      }
    );
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.colorSelected }
        ]}
      >
        <ModalCustom
          visible={this.state.visibleListColors}
          onRequestClose={this.doToggleModalListColors(false)}
          onPressBackdrop={this.doToggleModalListColors(false)}
        >
          <View style={styles.wrapperListColors}>
            {LIST_COLORS.map(item => {
              // let selectedColor = "transparent";
              // if (item === this.props.colorSelected) {
              //   selectedColor = "rgba(0,0,0,0.5)";
              // }
              return (
                <TouchableHighlight
                  key={item}
                  underlayColor={"rgba(255,255,255,0.5)"} // kalau warnanya lagi aktif
                  onPress={this.onChangeColorSelected(item)}
                  style={[styles.colors, { backgroundColor: item }]}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      top: 0,
                      backgroundColor:
                        this.props.colorSelected === item
                          ? "rgba(0,0,0,0.3)"
                          : "transparent"
                    }}
                  />
                </TouchableHighlight>
              );
            })}
          </View>
        </ModalCustom>
        <View
          style={[
            styles.wrapperInput,
            {
              borderColor: this.state.isFocusTextInput
                ? "red"
                : "rgba(0,0,0,0.5)"
            }
          ]}
        >
          <TextInput
            autoFocus={true}
            value={this.props.value}
            onFocus={this.onToggleTextInput}
            onBlur={this.onToggleTextInput}
            underlineColorAndroid={"transparent"}
            onChangeText={this.props.onChangeTextHeader}
            style={styles.input}
            ref={ref => {
              this.titleInputRef = ref;
            }}
          />
        </View>
        <TouchableNativeFeedback onPress={this.doToggleModalListColors(true)}>
          <View style={styles.wrapperRectangle}>
            <View
              style={[
                styles.rectangle,
                { backgroundColor: this.props.colorSelected }
              ]}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
  colorSelected: PropTypes.string,
  onChangeTextHeader: PropTypes.func.isRequired,
  onChangeColorSelected: PropTypes.func.isRequired
};

Header.defaultProps = {
  colorSelected: "#ffcd55"
};

export default Header;
