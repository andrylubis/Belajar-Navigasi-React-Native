/**
 * Splash Screen
 * 
 * https://github.com/facebook/react-native
 * @author    	Sandi Andrian <sandi@kodrindonesia.com>
 * @link      	https://kodrindonesia.com
 * @package  	BelajarNavigasiReact
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

export default class Splash extends Component {

	onClickNext = () =>  {
		this.props.navigation.navigate('Login');
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
		)
	}
}