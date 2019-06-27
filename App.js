/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Keyboard} from 'react-native';
import ToastUtil from './ToastUtil';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);

    this.state={
      message:""
    }
  }

  renderToast = () => {
    if(this.state.message !== "") {
      Keyboard.dismiss();
      ToastUtil.show(this.state.message)
    }
    else
      alert("Please enter input");

  };

  setMessage = (message) => {
    this.setState({message});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hey, Enter your message to display toast.</Text>
        <TextInput onChangeText={this.setMessage} style={styles.input}>
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={this.renderToast}>
          <Text style={styles.heading}> SHOW </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: 'bold',
    fontSize:18,
    padding:10

  },
  input: {
    borderColor:'black',
    borderWidth:1,
    width:'80%',
    marginVertical:10,
    height:40
  },
  button:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    backgroundColor: '#F5FCFF',
    margin:20,
    paddingHorizontal:10
  }
});
