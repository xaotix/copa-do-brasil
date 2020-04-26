import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Inicio from './src/pages/Inicio'
import Resultado from './src/pages/Resultado'
import { createStackNavigator } from '@react-navigation/stack'
import { CardStyleInterpolators } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" >
        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: '#4287f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "Resultado",
            headerTitleAlign: "center",
            headerLeft: null,
          }}
        />
        <Stack.Screen
        
          name="Inicio"
          component={Inicio}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              backgroundColor: '#4287f5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "Calcular Consumo Gasolina",
            headerTitleAlign: "center",
            headerLeft: null,
          }}

        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


