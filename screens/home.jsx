import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Button,
  TextInput,
  SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import CampoContext from '../contexts/camposContext';

const Home = ({ navigation }) => {
  const [nameCampo, setNameCampo] = useState('');
  const { lotes, addLote, deleteLote } = useContext(CampoContext);

  const handleNewLote = name => {
    addLote(name);
    setNameCampo('');
  };

  return (
    <View style={styles.container}>
      <View style={{ borderColor: 'green', borderWidth: 3 }}>
        <TextInput
          maxLength={18}
          value={nameCampo}
          placeholder='Ingrese un nombre'
          onChangeText={val => setNameCampo(val)}
          style={styles.textInput}
        />
      </View>
      <Button
        onPress={() =>
          nameCampo.length < 3
            ? alert('Ingrese un nombre con una longitud mayor a 3 caracteres.')
            : handleNewLote(nameCampo)
        }
        title='Agregar Nuevo Lote'
      ></Button>
      {/*<Button onPress={() => deleteLote(2)} title='Delete'></Button>*/}
      {!lotes ? (
        <Text>Cargando Datos . . . </Text>
      ) : (
        <View style={styles.safeArea}>
          <FlatList
            style={styles.flatList}
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
        </View>
      )}

      {/*<Button onPress={} title='La id'></Button>*/}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 50
  },
  safeArea: {
    //flex: 1
  },
  textBtn2: {
    paddingLeft: 0,
    paddingBottom: -5,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  textInput: {
    marginVertical: 15,
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

  container: { flex: 0.9 },
  textBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
