import React, { PureComponent } from "react";
import { Modal } from "react-native";
import PropTypes from "prop-types";

import Header from "../components/add-note/header";
import Content from "../components/add-note/content";

class AddNote extends PureComponent {
  state = {
    title: "",
    content: "",
    colorSelected: Header.LIST_COLORS[0]
  };

  handleOnChangeHeaderValue = stateName => value => {
    this.setState({
      [stateName]: value
    });
  };

  onSaveNote = () => {
    this.props.onSaveNote(this.state);
    this.setState({
      title: "",
      content: "",
      colorSelected: Header.LIST_COLORS[0]
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
          colorSelected={this.state.colorSelected.hexWithoutOpacity}
          onChangeTextHeader={this.handleOnChangeHeaderValue("title")}
          onChangeColorSelected={this.handleOnChangeHeaderValue(
            "colorSelected"
          )}
          onSaveNote={this.onSaveNote}
        />
        <Content
          value={this.state.content}
          onChangeTextContent={this.handleOnChangeHeaderValue("content")}
          colorSelected={this.state.colorSelected.hexWithOpacity}
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
