/**
 * Login Screen
 * 
 * https://github.com/facebook/react-native
 * @author    	Sandi Andrian <sandi@kodrindonesia.com>
 * @link      	https://kodrindonesia.com
 * @package  	  BelajarNavigasiReact
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

import styles from '../../config/styles';

export default class Login extends Component {

	onClickPrev = () =>  {  
    this.props.navigation.goBack();
	}

	render() {
		return (
			<View style={styles.container}>
	        <Text style={styles.welcome}>
	          Selamat, kamu sudah bisa bernavigasi ke Login Page.
	        </Text>
	        <View style={ styles.buttonWrapper }>
	          <TouchableHighlight 
	            style={styles.button}
	            underlayColor="#ff6d00"
	            onPress={ this.onClickPrev }>
	            <Text style={styles.buttonText}>Back</Text>
	          </TouchableHighlight>
	        </View>
	    </View>
		)
	}
}