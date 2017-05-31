/**
 * Router Stack Navigator
 * 
 * https://github.com/facebook/react-native
 * @author    	Sandi Andrian <sandi@kodrindonesia.com>
 * @link      	https://kodrindonesia.com
 * @package  	BelajarNavigasiReact
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import Splash from '../components/Splash/Splash';
import Login from '../components/Login/Login';

export const Root = StackNavigator({
	Splash: {
		screen: Splash
	},
	Login: {
		screen: Login
	}
}, {
	headerMode: 'none'
});