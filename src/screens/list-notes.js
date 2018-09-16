import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  FlatList,
  SectionList,
  AsyncStorage,
  ToastAndroid
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
    paddingVertical: 8,
    marginTop: 3
  },
  labelTypeNote: {
    fontSize: 18,
    marginLeft: 8
  },
  wrapperItem: {
    alignItems: "center",
    flexDirection: "row"
  },
  separatorLeftItem: {
    width: 5,
    height: "100%"
  },
  contentItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingLeft: 5,
    paddingRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  titleItem: {
    color: "black",
    fontSize: 17,
    fontWeight: "400"
  },
  timeItemCreated: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 12
  }
});

const Separator = () => (
  <View style={{ height: 20, backgroundColor: "white" }} />
);

class ListNotes extends PureComponent {
  state = {
    modalChooseTypeNote: {
      visible: false
    },
    modalAddNote: {
      visible: false
    },
    listNotes: []
  };

  static KEY_LIST_NOTES = "KEY_LIST_NOTES";

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

  async componentDidMount() {
    try {
      const listNoteStr = await AsyncStorage.getItem(ListNotes.KEY_LIST_NOTES);
      if (listNoteStr !== null) {
        this.setState({
          listNotes: JSON.parse(listNoteStr)
        });
      }
    } catch (e) {
      ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
    }
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
    const listNotes = [...this.state.listNotes, note];
    this.setState(
      {
        modalAddNote: {
          visible: false
        },
        listNotes
      },
      () => {
        AsyncStorage.setItem(
          ListNotes.KEY_LIST_NOTES,
          JSON.stringify(listNotes),
          error => {
            if (error) {
              ToastAndroid.show(error, ToastAndroid.SHORT);
            } else {
              ToastAndroid.show(
                "Berhasil menyimpan catatan",
                ToastAndroid.SHORT
              );
            }
          }
        );
      }
    );
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

  _renderItemNote = ({ item, index }) => {
    const oldTime = new Date(item.createdAt);
    const createdTimeAt = `${oldTime.getFullYear()}/${oldTime.getMonth() +
      1}/${oldTime.getDate()} ${oldTime.getHours()}:${oldTime.getMinutes()}`;
    return (
      <TouchableNativeFeedback onPress={() => alert(1)}>
        <View
          style={[
            styles.wrapperItem,
            { backgroundColor: item.colorSelected.hexWithOpacity }
          ]}
        >
          <View
            style={[
              styles.separatorLeftItem,
              { backgroundColor: item.colorSelected.hexWithoutOpacity }
            ]}
          />
          <View style={styles.contentItem}>
            <Text style={styles.titleItem}>{`${item.title.substr(
              0,
              25
            )}...`}</Text>
            <Text style={styles.timeItemCreated}>{createdTimeAt}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  };

  // _keyExtractorNote = (dataType, key, keyFlatlist) => (item, index) => {
  //   if (dataType == "string") {
  //     return `${keyFlatlist}-${item}`;
  //   }
  //   return `${keyFlatlist}-${item[key]}`;
  // };

  _keyExtractorNote = (item, index) => item.title;

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
          renderItem={this._renderItemNote}
          keyExtractor={this._keyExtractorNote}
        />
        {/* <FlatList
          data={["helo", "world", "gaes"]}
          keyExtractor={this._keyExtractorNote("string", null, 2)}
          renderItem={data => <Text>{data.item}</Text>}
        /> */}
        {/*
          <SectionList
            renderItem={({ item, index, section }) => (
              <Text key={index}>{item}</Text>
            )}
            renderSectionHeader={data => {
              return (
                <View style={{ marginVertical: 8 }}>
                  <Text>{data.section.title}</Text>
                </View>
              );
            }}
            sections={[
              {
                title: "Title1",
                data: ["item1", "item2"],
                renderItem: section => {
                  return (
                    <Text>
                      {section.section.title} OVERRIDE {section.item}
                    </Text>
                  );
                }
              },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title3", data: ["item5", "item6"] }
            ]}
          />
          */}
        {/* {[
          { id: 1, firstName: "zuli", lastName: "faidah" },
          { id: 2, firstName: "azhar", lastName: "prabudi" }
        ].map(item => (
          <Text
            key={item.id}
            onPress={() => {
              this.setState({
                selectedName: item.id
              });
            }}
            style={{
              color: this.state.selectedName === item.id ? "red" : "black"
            }}
          >
            {item.firstName} {item.lastName}
          </Text>
        ))} */}
      </View>
    );
  }
}

export default ListNotes;
