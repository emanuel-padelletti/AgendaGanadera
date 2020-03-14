// BEFORE USING SQLITE, IT WORKS ONLY ON PRODUCTION

import { AsyncStorage } from 'react-native';
const uuidv4 = require('uuid/v4');

const lotecitosTest = [
  {
    title: 'Campo uno',
    id: uuidv4(),
    vacas: '100',
    toros: '7',
    terneros: '122',
    terneras: '98',
    vaquillonas: '30',
    novillos: '0'
  },
  {
    title: 'Campo tres',
    id: uuidv4(),
    vacas: '200',
    toros: '100',
    terneros: '100',
    terneras: '100',
    vaquillonas: '10',
    novillos: '0'
  },
  {
    title: 'Campo dos',
    id: uuidv4(),
    vacas: '55',
    toros: '1',
    terneros: '25',
    terneras: '10',
    vaquillonas: '0',
    novillos: '0'
  }
];

const getCant = (id, name) => {
  //console.log(name);
  const index = lotes.findIndex(lote => {
    return lote.id === id;
  });
  return lotes[index][name];
};

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
    //console.log(value);
    setLotes(JSON.parse(value), ...lotes);
    // console.log(lotes);
  } catch (e) {
    console.log('error en getData');
  }
};
const deleteLote = id => {
  const newLotes = lotes.filter(l => l.id !== id);
  setLotes(newLotes);
  //setLotes(lotes);
};

changeData = async () => {
  try {
    const value = await AsyncStorage.mergeItem('DATOS', JSON.stringify(lotes));
  } catch (e) {
    console.log('Error al actualizar');
  }
};

const addLote = title => {
  if (lotes.length > 0) {
    setLotes([
      {
        title,
        id: uuidv4(),
        vacas: '0',
        toros: '0',
        terneros: '0',
        terneras: '0',
        vaquillonas: '0',
        novillos: '0'
      },
      ...lotes
    ]);
  } else {
    setLotes([
      {
        title,
        id: uuidv4(),
        vacas: '0',
        toros: '0',
        terneros: '0',
        terneras: '0',
        vaquillonas: '0',
        novillos: '0'
      }
    ]);
  }

  storeData();
};

const changeLote = (id, vacuno, nuevaCantidad) => {
  // Encuentro la posicion del array con respecto al id pasado por parametro
  const index = lotes.findIndex(lote => {
    return lote.id === id;
  });
  console.log(index);
  // Hago una copia del lote en particular
  const lote = { ...lotes[index] };
  lote[vacuno] = nuevaCantidad;
  //console.log(nuevaCantidad);
  //console.log(lote);
  // Copio todo el array
  const copyLotes = [...lotes];
  //console.log(copyLotes);
  copyLotes[index] = lote;
  setLotes(copyLotes);
};

/*useEffect(async () => {
    getData();
  }, []);*/
