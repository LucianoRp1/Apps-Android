import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Buttons from './buttons.jsx';

const Timer = ({pressCount}) => {
  const [seconds, setSeconds] = useState(0);
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
  if ( pressCount >= 6 ||  seconds === 60) {
    setTimeExpired(true);
    clearInterval(intervalId);
    setSeconds(0);
    return;
  }
  let intervalId = setInterval(() => {
    setSeconds((s) => s + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, [pressCount, timeExpired, seconds]);

  return (
    <View >
      <Text style={styles.text}>{seconds}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    text:{
      color: '#d4af37',
          textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5},
    textShadowRadius: 2,
      flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
export default Timer;