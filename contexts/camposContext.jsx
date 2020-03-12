import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
const uuidv4 = require('uuid/v4');

const CampoContext = createContext();

export const CampoContextProvider = ({ children }) => {
  const [lotes, setLotes] = useState([]);
  const lotecitosTest = [
    {
      title: 'Campo uno',
      id: uuidv4(),
      vacas: '100',
      toros: '7',
      terneros: '122',
      terneras: '98',
      vaquillonas: '30'
    },
    {
      title: 'Campo tres',
      id: uuidv4(),
      vacas: '200',
      toros: '100',
      terneros: '100',
      terneras: '100',
      vaquillonas: '10'
    },
    {
      title: 'Campo dos',
      id: uuidv4(),
      vacas: '55',
      toros: '1',
      terneros: '25',
      terneras: '10',
      vaquillonas: '0'
    }
  ];

  storeData = async () => {
    try {
      await AsyncStorage.setItem('DATOS', JSON.stringify(lotecitosTest));
    } catch (e) {
      console.log('error en store');
    }
  };
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('DATOS');
      console.log(value);
      setLotes(JSON.parse(value), ...lotes);
      console.log(lotes);
    } catch (e) {
      console.log('error en getData');
    }
  };

  changeData = async () => {
    try {
      const value = await AsyncStorage.mergeItem(
        'DATOS',
        JSON.stringify(lotes)
      );
    } catch (e) {
      console.log('Error al actualizar');
    }
  };

  useEffect(async () => {
    //storeData();
    getData();
  }, []);

  const deleteLote = id => {
    const newLotes = lotes.filter(l => l.id !== id);
    setLotes(newLotes);
    //setLotes(lotes);
  };

  const changeLote = (id, vacuno, nuevaCantidad) => {
    const loteFiltrado = lotes.filter(l => l.id === id);

    loteFiltrado.map(animal =>
      animal === vacuno ? (animal.vacuno = nuevaCantidad) : null
    );

    //console.log(nuevaCantidad);
    //console.log(vacuno);
    //console.log(loteFiltrado.vacuno);
    const todosLosLotesSinModificar = lotes.filter(l => l.id !== id);
    setLotes(loteFiltrado);
    storeData();
    console.log(lotes);
  };

  const addLote = title => {
    setLotes([
      {
        title,
        id: uuidv4(),
        vacas: '0',
        toros: '0',
        terneros: '0',
        terneras: '0',
        vaquillonas: '0'
      },
      ...lotes
    ]);
    storeData();
  };

  /*useEffect(async () => {
    getData();
  }, []);*/

  return (
    <CampoContext.Provider value={{ lotes, addLote, deleteLote, changeLote }}>
      {children}
    </CampoContext.Provider>
  );
};
export default CampoContext;
