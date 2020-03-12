import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from './routes/homeStack';
import { CampoContextProvider } from './contexts/camposContext';

export default function App() {
  return (
    <CampoContextProvider>
      <Navigator></Navigator>
    </CampoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
