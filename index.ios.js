/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

export default class BelajarNavigasiReact extends Component {

  onClickNext() {
    Alert.alert('Mari menuju ke splash screen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Halo, mari belajar React Native
        </Text>
        <View style={ styles.buttonWrapper }>
          <TouchableHighlight 
            style={styles.button}
            underlayColor="#ff6d00"
            onPress={ this.onClickNext }>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0, 
    right: 0
  },
  button: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6d00',
  },
  buttonText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('BelajarNavigasiReact', () => BelajarNavigasiReact);
