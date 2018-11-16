import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Button from './Button';

const FlatItem = ({ flat }) => {
  const { spaces, location, squareMeters, nightPrice, monthlyPrice } = flat;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.informationContainerStyle}>
        <Text>{location}</Text>
        <Text>{spaces} {spaces === 1 ? 'ambiente' : 'ambientes'}</Text>
        <Text>{squareMeters} metros cuadrados</Text>
        <Text>Precio por noche: ${nightPrice}</Text>
        <Text>Precio por mes: ${monthlyPrice}</Text>
      </View>
      <View style={styles.buttonContainerStyle}>
        <Button onPress={() => {}} label="Alquilar por noche" color="#00A8FF" />
        <Button onPress={() => {}} label="Alquilar por mes" color="#44BD32" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  informationContainerStyle: {
    flex: 3
  },
  buttonContainerStyle: {
    justifyContent: 'space-around'
  }
});

export default FlatItem;
