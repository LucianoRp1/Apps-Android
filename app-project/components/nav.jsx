import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Buttons from './buttons.jsx';
import Timer from './timer.jsx';


const Nav = ({timeExpired, setTimeExpired}) => {


	return (

		 <View style={styles.container}>
      <Buttons style={styles.container} timeExpired={timeExpired}/>
    </View>

    	)
}


const styles = StyleSheet.create({
  container: {
    height: '100%', 
     width: '100%',
  },

});


export default Nav