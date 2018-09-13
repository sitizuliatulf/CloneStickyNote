import React, { PureComponent } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableHighlight,
  Text,
  Modal,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

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
  },
  icon: {
    width: "10%",
    textAlign: "center"
  },
  containerModalMore: {
    flex: 1
  },
  cardModalMore: {
    position: "absolute",
    top: 10,
    right: 5,
    width: 150,
    borderRadius: 3,
    elevation: 1,
    backgroundColor: "white"
  },
  itemModalMore: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  iconItemModalMore: {
    width: "15%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  labelItemModalMore: {
    fontSize: 18,
    color: "black",
    fontWeight: "400"
  }
});

class Header extends PureComponent {
  state = {
    isFocusTextInput: false,
    visibleListColors: false,
    visibleModalMore: false
  };

  constructor() {
    super();
    this.listButtonsModalMore = [
      {
        label: "Save",
        iconName: "md-bookmark",
        onPress: this.onSaveNote
      },
      {
        label: "Discard",
        iconName: "md-trash",
        onPress: this.onSaveNote
      }
    ];
  }

  static LIST_COLORS = [
    { hexWithoutOpacity: "#ffcd55", hexWithOpacity: "rgba(255,205,85, 0.5)" },
    { hexWithoutOpacity: "#fa959f", hexWithOpacity: "rgba(250,149,159,0.5)" },
    { hexWithoutOpacity: "#555", hexWithOpacity: "rgba(85,85,85, 0.5)" },
    { hexWithoutOpacity: "#cac8a0", hexWithOpacity: "rgba(202,200,160, 0.5)" },
    { hexWithoutOpacity: "#718da5", hexWithOpacity: "rgba(113,141,165,0.5)" }
  ];

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

  doToggleModal = (stateName, value) => () => {
    this.setState({
      [stateName]: value
    });
  };

  onChangeColorSelected = hexCodeObj => () => {
    this.setState(
      {
        visibleListColors: false
      },
      () => {
        this.props.onChangeColorSelected(hexCodeObj);
      }
    );
  };

  onSaveNote = () => {
    this.props.onSaveNote();
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
          onRequestClose={this.doToggleModal("visibleListColors", false)}
          onPressBackdrop={this.doToggleModal("visibleListColors", false)}
        >
          <View style={styles.wrapperListColors}>
            {Header.LIST_COLORS.map(item => {
              // let selectedColor = "transparent";
              // if (item === this.props.colorSelected) {
              //   selectedColor = "rgba(0,0,0,0.5)";
              // }
              return (
                <TouchableHighlight
                  key={item.hexWithoutOpacity}
                  underlayColor={"rgba(255,255,255,0.5)"} // kalau warnanya lagi aktif
                  onPress={this.onChangeColorSelected(item)}
                  style={[
                    styles.colors,
                    { backgroundColor: item.hexWithoutOpacity }
                  ]}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: -20,
                      right: 0,
                      bottom: 0,
                      top: 0,
                      backgroundColor:
                        this.props.colorSelected === item.hexWithoutOpacity
                          ? "rgba(255,255,255,0.7)"
                          : "transparent"
                    }}
                  />
                </TouchableHighlight>
              );
            })}
          </View>
        </ModalCustom>
        <Modal
          transparent={true}
          visible={this.state.visibleModalMore}
          onRequestClose={this.doToggleModal("visibleModalMore", false)}
        >
          <TouchableWithoutFeedback
            onPress={this.doToggleModal("visibleModalMore", false)}
          >
            <View style={styles.containerModalMore}>
              <View style={styles.cardModalMore}>
                {this.listButtonsModalMore.map(item => (
                  <TouchableNativeFeedback
                    onPress={item.onPress}
                    key={item.label}
                  >
                    <View style={styles.itemModalMore}>
                      <View style={styles.iconItemModalMore}>
                        <Icon name={item.iconName} size={24} color={"black"} />
                      </View>
                      <Text style={styles.labelItemModalMore}>
                        {item.label}
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
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
        <TouchableNativeFeedback
          onPress={this.doToggleModal("visibleListColors", true)}
        >
          <View style={styles.wrapperRectangle}>
            <View
              style={[
                styles.rectangle,
                { backgroundColor: this.props.colorSelected }
              ]}
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={this.doToggleModal("visibleModalMore", true)}
        >
          <Icon
            name={"md-more"}
            size={32}
            color={"black"}
            style={styles.icon}
          />
        </TouchableNativeFeedback>
      </View>
    );
  }
}

Header.propTypes = {
  value: PropTypes.string.isRequired,
  colorSelected: PropTypes.string,
  onChangeTextHeader: PropTypes.func.isRequired,
  onChangeColorSelected: PropTypes.func.isRequired,
  onSaveNote: PropTypes.func.isRequired
};

Header.defaultProps = {
  colorSelected: "#ffcd55"
};

export default Header;
