import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  Modal
} from 'react-native';
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
  const handleEditName = id => {
    setModalVisibility(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ borderColor: '#95bf88', borderWidth: 2 }}>
        <TextInput
          maxLength={18}
          value={nameCampo}
          placeholder='Ingrese un nombre'
          onChangeText={val => setNameCampo(val)}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#4f4d3f',
          padding: 8
        }}
        onPress={() =>
          nameCampo.length < 3
            ? alert('Ingrese un nombre con una longitud mayor a 3 caracteres.')
            : handleNewLote(nameCampo)
        }
      >
        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
          Agregar nuevo Lote
        </Text>
      </TouchableOpacity>

      {/*<Button onPress={() => deleteLote(2)} title='Delete'></Button>*/}
      {!lotes ? (
        <Text>Cargando Datos . . . </Text>
      ) : (
        <View style={styles.safeArea}>
          <View class={styles.card}>
            <TouchableOpacity
              style={styles.btnTotal}
              onPress={() => navigation.navigate('Total')}
            >
              <View style={styles.TotalBtn}>
                <Text style={styles.textBtn2}>Cantidad Total</Text>
              </View>
            </TouchableOpacity>
          </View>

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
                    <MaterialIcons
                      onPress={() =>
                        Alert.alert(
                          'Alerta',
                          `¿ Esta seguro que desea cambiar el nombre del lote: ${item.title} ?`,
                          [
                            {
                              text: 'Cancelar',
                              onPress: () => console.log('Cancel presseds')
                            },
                            {
                              text: 'Si',
                              onPress: () =>
                                navigation.navigate('CustomModal', item.id)
                            }
                          ]
                        )
                      }
                      name='edit'
                      size={26}
                      style={{ color: 'white', marginHorizontal: 0 }}
                    />
                    <Text style={styles.textBtn2}>{item.title}</Text>

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
    marginHorizontal: 60,
    width: 300,
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
  btnTotal: {
    marginHorizontal: 18,
    marginVertical: 12,
    padding: 13,
    justifyContent: 'center',
    backgroundColor: '#50585e',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
    borderRadius: 5
  },

  container: { flex: 0.75 },
  textBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
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
    backgroundColor: '#F7F7F7',
    paddingVertical: 20,
    paddingHorizontal: 10,

    fontSize: 28,
    color: 'grey'
  }
});
