import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import DisplayLove from './components/DisplayLove';
// You can import from local files
//import Header from '../components/Header';
//mport Forecast from './screens/Forecast';
// or any pure javascript modules available in npm

export default class App extends Component {
  state = {
    fname: '',
    sname: '',
    result: "loading",
  };

  submitit() {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          'X-RapidAPI-Key':
            'a6d5009e47msh25732c75314dff5p194d01jsnc1d96b4f2985',
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        }
      })
      .then(data=>data.json())
      .then(data2 =>{
        console.log(data2)
        this.setState({
          result:data2
        })
      })
  }

  render() {
    const { fname, sname } = this.state;
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: 'center' }}
          />
        </Appbar.Header>

        <TextInput
          style={styles.textinput}
          value={this.state.fname}
          onChangeText={(text) => this.setState({ fname: text })}
          placeholder={'Your Name '}
          placeholderTextColor={'black'}
           autoFocus
        />

        <TextInput
          style={[styles.textinput, { marginTop: 10 }]}
          value={this.state.sname}
          onChangeText={(text) => this.setState({ sname: text })}
          placeholder={'Other Name '}
          placeholderTextColor={'black'}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.button, { textAlign: 'center', alignItems: 'center' }]}
          onPress={this.submitit.bind(this)}>
          <Text>Calculator</Text>
        </TouchableOpacity>

        <DisplayLove data={this.state.result} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
    //paddingHorizontal:10
  },
  textinput: {
    alignItems: 'center',
    justifyContent: 'center',
    //width: '75%',
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'blueviolet',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: 'black',
    fontFamily: 'Rajdhani_600SemiBold',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 80,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',

    margin: 10,
    //width: '60%',
    height: 50,
    marginHorizontal: 60,
    marginTop: 90,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: 'blueviolet',
  },
});
