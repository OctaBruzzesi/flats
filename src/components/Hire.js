import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import Button from './Button';
import flats from '../assets/flats.json';

class Hire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // gets the selected flat from the list of falts
      flat: flats[props.navigation.state.params.id - 1],  
      time: '',
      price: 0
    };
  }

  getPricing() {
    const time = this.state.time === '' ? 0 : this.state.time;
    const timePrice = this.props.navigation.state.params.action === 'night' ?
      this.state.flat.nightPrice : this.state.flat.monthlyPrice;

    return time * timePrice;
  }

  render() {
    const { id, action } = this.props.navigation.state.params;
    const flatIndex = id - 1;

    const { spaces, location, squareMeters, nightPrice, monthlyPrice } = flats[flatIndex];
    return (
      <View style={styles.containerStyle}>
        <Text>{location}</Text>
        <Text>{spaces} {spaces === 1 ? 'ambiente' : 'ambientes'}</Text>
        <Text>{squareMeters} metros cuadrados</Text>
        { 
          action === 'night' ?
            <Text>Precio por noche: ${nightPrice}</Text>
            : 
            <Text>Precio por mes: ${monthlyPrice}</Text>
        }
        <Text>Ingrese el tiempo que quiere alquilar el departamento</Text>
        <TextInput
          value={this.state.time}
          onChangeText={value => this.setState({ time: value })}
          style={styles.inputStyle}
        />
        <Text>Valor del aquiler: {this.getPricing()}</Text>
        <Button
          label="Aceptar"
          onPress={() => Alert.alert('Felicitaciones! Disfrute de su departamento')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    margin: 25
  },
  inputStyle: {
    marginTop: 15,
    marginRight: 15,
    marginBottom: 15,
    borderBottomWidth: 1
  }
});

export default Hire;
