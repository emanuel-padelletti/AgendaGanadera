import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput
} from 'react-native';
import AnimalDetails from '../components/AnimalDetails';

const LoteDetails = ({ navigation, route }) => {
  const { title, id } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.cantidad}>Cambiar Cantidad:</Text>
      </View>
      <AnimalDetails id={id} name={'vacas'} title='Vacas' />
      <AnimalDetails id={id} name={'vaquillonas'} title='Vaquillonas' />
      <AnimalDetails id={id} name={'terneros'} title='Terneros' />
      <AnimalDetails id={id} name={'terneras'} title='Terneras' />
      <AnimalDetails id={id} name={'novillos'} title='Novillos' />
      <AnimalDetails id={id} name={'toros'} title='Toros' />

      {/**
       *  LA PROXIMA AGREGAR TEXTINPUT PARA CADA ELEMENTO CON UN SAVE INDIVIDUAL
       * PASA COMO PROPS HASTA EL HOME LA FUNCIONA QUE SE ENCARGA DE GUARDAR LOS DATOS
       * INTERNAMENTE CON SYNCSTORATE, IMPORTANTE SABER QUE DEBE SER UN NUMERO
       * ADEMAS AGREGAR UN MODAL EN PANTALLA PRINCIPAL PARA AGREGAR NUEVOS LOTES
       */}

      <View style={styles.btn}>
        <Button title='Los cambios realizados se guardan automaticamente'></Button>
      </View>
    </View>
  );
};

export default LoteDetails;

const styles = StyleSheet.create({
  titleWraper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'left',
    fontSize: 24,
    marginBottom: 20,
    color: '#5fa163',
    fontWeight: 'bold'
  },
  cantidad: {
    paddingTop: 7,
    textAlign: 'right',
    fontSize: 18,
    marginBottom: 0,
    color: 'grey'
  },
  text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b2b2b'
  },
  btnAgregar: {
    color: '#2b2b2b',
    backgroundColor: '#bbf0a8',
    padding: 12,
    margin: 1,
    borderRadius: 15
  },
  btnRestar: {
    color: '#2b2b2b',
    marginLeft: 10,
    backgroundColor: '#ff9b94',
    padding: 12,
    margin: 1,
    borderRadius: 15
  },
  container: {
    padding: 15
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    flex: 2
  },
  input: { flex: 1, borderColor: 'black' },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn: {
    marginVertical: 70,
    marginBottom: 0,
    marginHorizontal: 50
  }
});
