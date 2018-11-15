import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FlatItem = ({ flat }) => (
    <View style={styles.containerStyle}>
      <Text>{flat.location}</Text>
      <Text>{flat.spaces} ambientes</Text>
      <Text>{flat.squareMeters} metros cuadrados</Text>
      <Text>Precio por noche: ${flat.nightPrice}</Text>
      <Text>Precio por mes: {flat.monthlyPrice}</Text>
    </View>
  );

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    borderWidth: 1
  }
});

export default FlatItem;
