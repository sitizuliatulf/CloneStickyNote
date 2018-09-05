import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Title from './src/components/etc/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  wrapperContent: {
    marginVertical: 8,
  },
  wrapperButton: {
    height: 200,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default class App extends React.Component {
  state = {
    count: 0,
    like: 0,
  };

  onClick = (stateName, isAdd = true) => () => {
    let value = this.state[stateName];
    if (isAdd) {
      value += 1
    } else {
       value -= 1;
    }
    this.setState({
      [stateName]: value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <View style={[styles.container, { padding: 15 }]}>
          <View style={styles.wrapperContent}>
            <Title name={'Total Angka : '} count={this.state.count} />
            <View style={styles.wrapperButton}>
              <Button title={"+ Angka"} onPress={this.onClick('count')} />
              <Button title={"- Angka"} onPress={this.onClick('count', false)} />
              <Button title={"- Angka"} onPress={this.onClick('count', false)} />
            </View>
          </View>
          
          <Title name={'Total Like : '} count={this.state.like} />
          <Button title={"Tambah Like"} onPress={this.onClick('like')} />
          <Button title={"Kurang Like"} onPress={this.onClick('like', false)} />
          
        </View>
        <View style={[styles.container, { backgroundColor: '#f3f3f3' }]}>
        </View>
      </React.Fragment>
    );
  }
}
