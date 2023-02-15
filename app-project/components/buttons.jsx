import React from 'react'
import {useState, useEffect} from 'react'
import{View , Animated, Button, StyleSheet, Alert, TouchableOpacity, Text , ScrollView} from 'react-native'
import Timer from './timer.jsx'

// const stageOne = Math.floor(Math.random() * 50) + 1;
//  console.log(stageOne)



const Buttons = ({timeExpired, setSeconds, setTimeExpired}) => {

  let buttons =[0,];
  for (let i = 1; i <= 50; i++) {
  buttons.push(i);
}
 //console.log(stageOne)
const [selectedButton, setSelectedButton] = useState();
const [pressCount, setPressCount]= useState(0)
const [result, setResult] = useState('');
const [animation, setAnimation] = useState(new Animated.Value(0));
const [stageOne, setStageOne] = useState(Math.floor(Math.random() * 50) + 1);

console.log(stageOne)

useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, [animation]);


const resetGame = () => {
  setSelectedButton(null);
  setResult('');
  setPressCount(0);
  setStageOne(Math.floor(Math.random() * 50) + 1);
};

 const handlePress = value => {
  if (pressCount >= 6 || timeExpired) {
    return;
  }

  setPressCount(pressCount + 1);
  setSelectedButton(value);

  if (value > stageOne) {
    setResult(`${value} Muy Alto`);
  } else if (value < stageOne) {
    setResult(`${value} Muy Bajo`);
  } else {
    setResult( alert(`Excelente has encontrado el numero incognito ${stageOne}`));
  
  }

};



	return (
    <ScrollView>
  <View style={styles.container1}>
  <View style={styles.containerTitle}>
   <Text style={styles.text}>Reto número uno</Text>
   <Text style={styles.text}>Tiempo : <Timer style={styles.text} pressCount={pressCount} setSeconds={setSeconds} /></Text>
   </View>
   <View  style={styles.containerButtons}>
    {buttons.map(el => (
      <TouchableOpacity activeOpacity={0.7} key={el} style={styles.touchable} disabled={(stageOne === selectedButton || pressCount >= 6 || timeExpired )} onPress={() => handlePress(el)} >
       <Animated.View style={[styles.buttonContainer, { 
   transform: [{
     scale: animation 
   }]
 }]}>
   <Text style={styles.touchBoton}>
     {el}
   </Text>
 </Animated.View>
      </TouchableOpacity>
    ))}
    </View>
     <Text style={styles.text}>{result}</Text>
     {(stageOne === selectedButton || pressCount >= 6 || timeExpired ) && (
      <View style={styles.textReset}>
        <Button title="Reiniciar" onPress={resetGame} />
      </View>
    )}
  </View>
  </ScrollView>
	)
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#474747',
    height: '100%',
    width: '100%',
       textAlign: 'center',
    // paddingVertical: 10
  },
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '16%',
    textAlign: 'center',
    width: '100%'
  },
  containerButtons: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '70%',
    width: '100%'
  },
  touchable: {
    margin: 5,

  },
  buttonContainer: {
    borderRadius: 15,
    backgroundColor: '#d4af37',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchBoton: {
    color: 'black',
    fontSize: 25,
    shadowColor: '#FFD700',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.9,
    elevation: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  text: {
    color: '#d4af37',
        textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5},
    textShadowRadius: 2,
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: 10
  },
    textReset: {
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 20,
     marginTop: 15
  },
});



export default Buttons ;