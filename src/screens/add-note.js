import React, { Component } from "react";
import { Modal } from "react-native";
import PropTypes from "prop-types";
// import _ from 'lodash'; // bad practice
import isEqual from "lodash/isEqual"; // good practice

import Header from "../components/add-note/header";
import Content from "../components/add-note/content";

class AddNote extends Component {
  state = {
    title: "",
    content: "",
    colorSelected: Header.LIST_COLORS[0]
  };

  shouldComponentUpdate(previousProps, previousState) {
    if (
      previousProps.visible !== this.props.visible ||
      isEqual(previousProps.params, this.props.params) === false ||
      previousState.title !== this.state.title ||
      previousState.content !== this.state.content ||
      isEqual(previousState.colorSelected, this.state.colorSelected) === false
    ) {
      return true;
    }
    return false;
  }

  componentDidUpdate(previousProps, previousState) {
    /* 
    
    previousProps => is the value from previous property has given by parent
    this props => is the current value from parrent when the previous value has been changed
    
    */

    if (
      previousProps.params.isEdit == false &&
      this.props.params.isEdit == true
    ) {
      this.setState({
        title: this.props.params.title,
        content: this.props.params.content,
        createdAt: this.props.params.createdAt,
        colorSelected: this.props.params.colorSelected
      });
    } else if (
      previousProps.params.isEdit == true &&
      this.props.params.isEdit == false
    ) {
      this.setState({
        title: "",
        content: "",
        createdAt: "",
        colorSelected: Header.LIST_COLORS[0]
      });
    }
  }

  handleOnChangeHeaderValue = stateName => value => {
    this.setState({
      [stateName]: value
    });
  };

  onSaveNote = () => {
    if (this.props.params.isEdit) {
      this.props.onSaveNote({
        ...this.state,
        createdAt: this.props.params.createdAt
      });
    } else {
      this.props.onSaveNote({ ...this.state, createdAt: new Date().getTime() });
    }
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
  onRequestClose: PropTypes.func,
  onSaveNote: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
};

AddNote.defaultProps = {
  onRequestClose: () => {}
};

export default AddNote;
