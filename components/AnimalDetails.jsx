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

const AnimalDetails = ({ cant, title, id, name }) => {
  const [cantidad, setCantidad] = useState(parseInt(cant));
  const { changeLote } = useContext(CampoContext);

  const handleTextChange = e => {
    if (isNaN(e)) {
      alert('Debes ingresar un numero');
      setCantidad(parseInt(cant));
    } else if (e === '') {
      setCantidad(0);
    } else if (e === '  ' || e === ' ') {
      setCantidad(parseInt(cant));

      changeLote(id, name, cantidad);
    } else {
      setCantidad(parseInt(e));
      changeLote(id, name, cantidad);
    }
  };
  return (
    <View>
      <View style={styles.subContainer}>
        <View style={styles.name}>
          <Text style={styles.text}>
            {title} : {cantidad}
          </Text>
        </View>
        <TextInput
          value={cantidad.toString()}
          placeholder={cant}
          keyboardType='numeric'
          onChangeText={handleTextChange}
          style={styles.textInput}
        />
        <Text styles={{ display: 'float' }}></Text>

        {/*  <TouchableOpacity
          onPress={() => {
            /* do this */
        /*  }}
        >
          <View style={styles.btnAgregar}>
            <Text style={styles.textBtn}>+1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* do this */
        /*   }}
        >
          <View style={styles.btnRestar}>
            <Text style={styles.textBtn}>-1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* do this */
        /*    }}
        >
          <View style={styles.btnReset}>
            <Text style={styles.textBtn}>*10</Text>
          </View>
        </TouchableOpacity>*/}
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
