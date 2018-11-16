import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const FlatItem = ({ flat }) => (
    <View style={styles.containerStyle}>
      <View style={styles.informationContainerStyle}>
        <Text>{flat.location}</Text>
        <Text>{flat.spaces} ambientes</Text>
        <Text>{flat.squareMeters} metros cuadrados</Text>
        <Text>Precio por noche: ${flat.nightPrice}</Text>
        <Text>Precio por mes: {flat.monthlyPrice}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}} ><Text>Alquilar por noche</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {}} ><Text>Alquilar por mes</Text></TouchableOpacity>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    flexDirection: 'row'
  },
  informationContainerStyle: {
    flex: 3
  }
});

export default FlatItem;
