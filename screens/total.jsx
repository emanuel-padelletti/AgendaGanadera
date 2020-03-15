import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampoContext from '../contexts/camposContext';
import AnimalTotal from '../components/AnimalTotal';

const total = () => {
  const { getTotal } = useContext(CampoContext);
  const lotes = getTotal();
  let cantVacas = 0;
  let cantToros = 0;
  let cantTerneros = 0;
  let cantTerneras = 0;
  let cantVaquillonas = 0;
  let cantNovillos = 0;
  lotes.map(lote => {
    if (lote.vacas) {
      cantVacas += lote.vacas;
    }
    if (lote.toros) {
      cantToros += lote.toros;
    }
    if (lote.terneros) {
      cantTerneros += lote.terneros;
    }
    if (lote.terneras) {
      cantTerneras += lote.terneras;
    }
    if (lote.vaquillonas) {
      cantVaquillonas += lote.vaquillonas;
    }
    if (lote.novillos) {
      cantNovillos += lote.novillos;
    }
  });

  return (
    <View>
      <View style={styles.subContainer}>
        <AnimalTotal cant={cantVacas} title='Vacas' />
        <AnimalTotal cant={cantTerneros} title='Terneros' />
        <AnimalTotal cant={cantTerneras} title='Terneras' />
        <AnimalTotal cant={cantVaquillonas} title='Vaquillonas' />
        <AnimalTotal cant={cantToros} title='Toros' />
        <AnimalTotal cant={cantNovillos} title='Novillos' />
      </View>
    </View>
  );
};

export default total;

const styles = StyleSheet.create({
  subContainer: {
    paddingVertical: 15,
    marginBottom: 20
  }
});
