import React, { PureComponent } from "react";
import { View, Modal, Button } from "react-native";
import PropTypes from "prop-types";

import Header from "../components/add-note/header";

class AddNote extends PureComponent {
  state = {
    title: "",
    colorSelected: "#ffcd55"
  };

  handleOnChangeHeaderValue = stateName => value => {
    this.setState({
      [stateName]: value
    });
  };

  render() {
    return (
      <Modal
        overFullScreen={true}
        animationType={"none"}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}
      >
        <Header
          value={this.state.title}
          colorSelected={this.state.colorSelected}
          onChangeTextHeader={this.handleOnChangeHeaderValue("title")}
          onChangeColorSelected={this.handleOnChangeHeaderValue(
            "colorSelected"
          )}
        />
      </Modal>
    );
  }
}

AddNote.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func
};

AddNote.defaultProps = {
  onRequestClose: () => {}
};

export default AddNote;
