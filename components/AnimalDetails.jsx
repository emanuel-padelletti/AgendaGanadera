import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardTypeAndroid,
  TextInput,
  KeyboardType,
  Button
} from 'react-native';
import CampoContext from '../contexts/camposContext';

//  DIRECTAMENTE VOY A UTILIZAR EL CONTEXT DONDE LE PASO LAS FUNCIONES EN LAS QUE PUEDE SEGUN EL VALUE 'Vacas' DETERMINAR cantidad
//  otro dia cambiar esto y los detalles de los animales asociarlos directamente con el context y no pasarlo desde loteDetails capaz hay problemas ahi

const AnimalDetails = ({ title, id, name }) => {
  const { changeLote, getCant } = useContext(CampoContext);
  const [cantidad, setCantidad] = useState(parseInt(getCant(id, name)));

  const handleTextChange = e => {
    if (isNaN(e)) {
      alert('Debes ingresar un numero');
      setCantidad(parseInt(cantidad));
    } else if (e === '') {
      setCantidad(0);
      changeLote(id, name, 0);
    } else if (e === '  ' || e === ' ') {
      setCantidad(0);

      changeLote(id, name, parseInt(e));
    } else if (e.length > 4) {
      alert('Solo es permitido un numero con un maximo de 4 caracteres.');
    } else {
      setCantidad(parseInt(e));
      changeLote(id, name, parseInt(e));
    }
  };
  return (
    <View>
      <View style={styles.subContainer}>
        <View style={styles.name}>
          <Text style={styles.text}>
            {title} : {getCant(id, name)}
          </Text>
        </View>
        <TextInput
          value={cantidad.toString()}
          keyboardType='numeric'
          onChangeText={handleTextChange}
          style={styles.textInput}
        />
        <Text styles={{ display: 'float' }}></Text>
      </View>
    </View>
  );
};

export default AnimalDetails;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b2b2b'
  },
  btnAgregar: {
    color: '#2b2b2b',
    backgroundColor: '#bbf0a8',
    padding: 9,
    margin: 1,
    borderRadius: 15
  },
  btnRestar: {
    color: '#2b2b2b',
    marginLeft: 10,
    backgroundColor: '#ff9b94',
    padding: 9,
    margin: 1,
    borderRadius: 15
  },
  btnReset: {
    marginLeft: 10,
    color: '#2b2b2b',
    backgroundColor: '#ffeba3',
    padding: 10,
    margin: 1,
    borderRadius: 15
  },
  container: {
    padding: 15
  },
  subContainer: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    flex: 1
  },
  input: { flex: 1, borderColor: 'black' },
  textInput: {
    borderRadius: 1,
    borderColor: 'black',
    alignItems: 'center'
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn: {
    marginVertical: 180,
    marginBottom: 0,
    marginHorizontal: 50
  },
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1
  }
});
