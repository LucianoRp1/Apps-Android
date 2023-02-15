import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import Nav from './components/nav.jsx'
import { NavigationContainer } from '@react-navigation/native';
import Start from './components/start.jsx'
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();

  return (
     <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome !" component={Start} options={{
          headerTintColor: '#d4af37',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#474747',
          },
          headerTitleStyle: {
      fontSize: 24,
    },
        }}/>
      <Stack.Screen name="The Game" component={Nav} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    width: '100%',
     backgroundColor: '#101010',
  },
  });