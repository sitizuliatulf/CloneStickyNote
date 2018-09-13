import React from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  cardBox: {
    padding: 15,
    elevation: 3,
    borderRadius: 3,
    backgroundColor: "white",
    alignItems: "flex-start",
    width: Dimensions.get("screen").width - 34
  }
});

const ModalCustom = props => (
  <Modal
    transparent={true}
    overFullScreen={true}
    animationType={"none"}
    visible={props.visible}
    onRequestClose={props.onRequestClose}
  >
    <TouchableWithoutFeedback onPress={props.onPressBackdrop}>
      <View style={styles.containerModal}>
        <View style={styles.cardBox}>{props.children}</View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);

ModalCustom.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onPressBackdrop: PropTypes.func.isRequired,
  children: PropTypes.object
};

export default ModalCustom;
