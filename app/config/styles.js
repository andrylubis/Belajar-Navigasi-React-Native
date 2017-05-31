/**
 * Styles
 * 
 * https://github.com/facebook/react-native
 * @author      Sandi Andrian <sandi@kodrindonesia.com>
 * @link        https://kodrindonesia.com
 * @package   BelajarNavigasiReact
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';

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

export default styles;