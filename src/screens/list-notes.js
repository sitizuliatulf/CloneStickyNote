import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "../components/list-notes/header";
import AddNote from "./add-note";
import ModalCustom from "../components/etc/modal-custom";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  roundedIcon: {
    borderRadius: 24,
    backgroundColor: "white"
  },
  titleCard: {
    fontSize: 20,
    color: "black",
    marginBottom: 12
  },
  typeNote: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 8
  },
  labelTypeNote: {
    fontSize: 18,
    marginLeft: 8
  }
});

class ListNotes extends PureComponent {
  state = {
    modalChooseTypeNote: {
      visible: false
    },
    modalAddNote: {
      visible: false
    },
    listNotes: [
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      },
      {
        title: "Contekan ulangan matematika",
        content: "OMG UWOW",
        colorSelected: "red"
      },
      {
        title: "Surat cinta untuk aa",
        content: "OMG UWOW",
        colorSelected: "blue"
      },
      {
        title: "Password wifi tetangga",
        content: "OMG UWOW",
        colorSelected: "black"
      }
    ]
  };

  constructor() {
    super();
    this._typeNote = [
      {
        label: "Text",
        iconName: "note-add",
        onPress: this.doToggleModalAddNote(false, true)
      },
      {
        label: "Checklist",
        iconName: "playlist-add-check",
        onPress: () => alert(1)
      }
    ];
  }

  doToggleModalAddNote = (visibleTypeNote, visibleModalAddNote) => () => {
    this.setState({
      modalChooseTypeNote: {
        visible: visibleTypeNote
      },
      modalAddNote: {
        visible: visibleModalAddNote
      }
    });
  };

  doToggleModalChooseTypeNote = visible => () => {
    this.setState({
      modalChooseTypeNote: {
        visible
      }
    });
  };

  onSaveNote = note => {
    // listnotes []
    // this.state.listNotes.push(note);
    // listnotes [opopo]
    // const newListNotes = this.state.listNotes;

    // listnotes [10, 20, 30]
    // var x = this.state.listNotes.concat([], note)

    this.setState({
      modalAddNote: {
        visible: false
      },
      listNotes: [...this.state.listNotes, note]
    });
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState(
  //       {
  //         name: "Hello world"
  //       },
  //       () => alert("state udah diubah")
  //     );
  //   }, 1000);
  // }

  //   shouldComponentUpdate(newProps, newState) {
  //     if (newState.name == this.state.name) {
  //       return false;
  //     }
  //     return true;
  //   }

  _renderItemNote = ({ item, index }) => (
    <View style={{ backgroundColor: item.colorSelected, paddingVertical: 10 }}>
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={"Hello Noted"}
          icons={[
            {
              name: "add",
              onPress: this.doToggleModalChooseTypeNote(true),
              color: "black",
              style: styles.roundedIcon
            }
          ]}
        />
        <ModalCustom
          visible={this.state.modalChooseTypeNote.visible}
          onRequestClose={this.doToggleModalChooseTypeNote(false)}
          onPressBackdrop={this.doToggleModalChooseTypeNote(false)}
        >
          <React.Fragment>
            <Text style={styles.titleCard}>Add Note</Text>
            {this._typeNote.map(({ onPress, iconName, label }) => (
              <TouchableWithoutFeedback key={label} onPress={onPress}>
                <View style={styles.typeNote}>
                  <Icon name={iconName} size={28} color={"#555"} />
                  <Text style={styles.labelTypeNote}>{label}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </React.Fragment>
        </ModalCustom>
        <AddNote
          visible={this.state.modalAddNote.visible}
          onRequestClose={this.doToggleModalAddNote(false, false)}
          onSaveNote={this.onSaveNote}
        />
        <FlatList
          data={this.state.listNotes}
          keyExtractor={item => item.title}
          renderItem={this._renderItemNote}
          ItemSeparatorComponent={() => {
            return "string";
          }}
        />
      </View>
    );
  }
}

export default ListNotes;
