import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CampoContext from '../contexts/camposContext';

const customModal = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const { changeLote } = useContext(CampoContext);
  const handleNewName = () => {
    changeLote(route.params, 'title', name);
    setName('');
    navigation.pop();
  };
  return (
    <View>
      <View>
        <Text style={styles.modalText}>Ingrese un nuevo nombre:</Text>

        <View style={{ borderColor: 'green', borderWidth: 3 }}>
          <TextInput
            maxLength={18}
            value={name}
            placeholder='Ingrese un nombre'
            onChangeText={val => setName(val)}
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity
          style={styles.modalBtn}
          onPress={() =>
            name.length < 3
              ? alert(
                  'Ingrese un nombre con una longitud mayor a 3 caracteres.'
                )
              : handleNewName()
          }
        >
          <View style={styles.wraperButton}>
            <Text style={styles.modalBtn}>Guardar nuevo nombre</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default customModal;

const styles = StyleSheet.create({
  wraperButton: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 30
  },
  TotalBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  modalText: {
    color: 'black',
    fontSize: 30,
    margin: 30,
    fontWeight: 'bold',
    marginLeft: 30
  },
  modalBtn: {
    backgroundColor: '#325e3b',
    marginTop: 20,
    borderRadius: 20,
    paddingBottom: 5,
    margin: 10,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },
  textInput: {
    marginVertical: 15,
    marginHorizontal: 60,
    width: 340,
    height: 40,
    borderRadius: 1,
    borderColor: 'black',
    alignItems: 'center',
    borderColor: 'black',
    fontSize: 24
  }
});
