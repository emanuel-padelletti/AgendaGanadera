import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './../screens/home';
import Header from '../shared/header';
import LoteDetails from './../screens/loteDetails';

const Stack = createStackNavigator();

export const Navigator = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2E7D32'
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={({ route, navigation }) => {
            return {
              headerTitle: () => (
                <Header
                  navigation={navigation}
                  title='Pagina Principal'
                  route={route}
                />
              )
            };
          }}
        />
        <Stack.Screen
          name='LoteDetails'
          component={LoteDetails}
          options={({ route, navigation }) => {
            return {
              headerTitle: () => (
                <Header
                  navigation={navigation}
                  title='Lista de Animales'
                  route={route}
                />
              )
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
