import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AnimalTotal = ({ title, cant }) => {
  return (
    <View style={styles.name}>
      <View>
        <Text style={styles.text}> {title} :</Text>
      </View>
      <View>
        <Text style={styles.text}>{cant}</Text>
      </View>
    </View>
  );
};

export default AnimalTotal;

const styles = StyleSheet.create({
  name: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  text: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#384538'
  }
});
