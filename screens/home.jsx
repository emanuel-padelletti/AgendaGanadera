import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Button,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import CampoContext from '../contexts/camposContext';

const Home = ({ navigation }) => {
  const [nameCampo, setNameCampo] = useState('');
  const { lotes, addLote, deleteLote } = useContext(CampoContext);

  //const [lotes, setLotes] = useState([]);

  const handleNewLote = () => {
    console.log('anda');

    setLotes(value);
    console.log(lotes);
  };

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={18}
        value={nameCampo}
        placeholder='Ingrese un nombre'
        onChangeText={val => setNameCampo(val)}
        style={styles.textInput}
      />
      <Button
        onPress={() => addLote(nameCampo)}
        title='Agregar Nuevo Campo'
      ></Button>
      <Button onPress={() => deleteLote(2)} title='Delete'></Button>
      {!lotes ? (
        <Text>Cargando Datos . . . </Text>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={lotes}
          renderItem={({ item }) => (
            <View class={styles.card}>
              <TouchableOpacity
                style={styles.btnUno}
                onPress={() => navigation.navigate('LoteDetails', item)}
              >
                <View style={styles.textBtn}>
                  <Text style={styles.textBtn2}>- {item.title}</Text>

                  <MaterialIcons
                    onPress={() =>
                      Alert.alert(
                        'Alerta',
                        `¿ Esta seguro que desea eliminar ${item.title} ?`,
                        [
                          {
                            text: 'Cancelar',
                            onPress: () => console.log('Cancel pressed')
                          },
                          { text: 'OK', onPress: () => deleteLote(item.id) }
                        ]
                      )
                    }
                    name='delete'
                    size={26}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/*<Button onPress={} title='La id'></Button>*/}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textBtn2: {
    paddingLeft: 0,
    paddingBottom: -5,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  textInput: {
    marginHorizontal: 70,
    width: 270,
    height: 40,
    borderRadius: 1,
    borderColor: 'black',
    alignItems: 'center',
    borderColor: 'black',
    fontSize: 24
  },
  icon: {
    color: '#EA4436',
    marginLeft: 0
  },

  card: {
    marginTop: 15,
    borderRadius: 6,
    elevation: 22,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  btnUno: {
    marginHorizontal: 18,
    marginVertical: 12,
    padding: 13,

    backgroundColor: '#222222',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    borderRadius: 5
  },

  container: {},
  textBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
