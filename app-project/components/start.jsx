import React, { useEffect, useState } from 'react';
import {Animated, TouchableOpacity, Text, StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nav from './nav.jsx';
import Buttons from './buttons.jsx';


const Start = () => {
	const navigation = useNavigation();
      const [rotateValue] = useState(new Animated.Value(0));
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

    useEffect(() => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true
    }).start();
  }, []);


	 return (
    <View style={styles.container}>
           <Animated.View style={{ transform: [{ rotate }] }}>
        <Text style={styles.text}>Stage One</Text>
      </Animated.View>
      <View style={styles.containerRules}>
      <Text style={styles.rules}> Reglas: Hola usuario, tu objetivo será encontrar el número incognito, solo tendrás 6 intentos para localizarlo, tendrás un rango de números del 1 al 50 para elegir y un tiempo de 60 segundos para completar tu mision .
Buena suerte ..
</Text>
 </View>
      <View style={styles.butonStart}>
           <Button
        title="Press Start"
         onPress={() => {
    navigation.navigate('The Game');
  }}
      />
      </View>
       </View>

  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#474747',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  containerRules: {
    backgroundColor: '#474747',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20
  },
  text: {
    color: '#d4af37',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5},
    textShadowRadius: 2
  },
  rules: {
    color: '#d4af37',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    height: '60%',
    width: '100%'
  },
  butonStart: {
    marginTop: 30,
    width: '100%'
  }
});

export default Start