import React, { Component } from 'react';
import { Text, View } from 'react-native';
import flats from '../assets/flats.json';

class Hire extends Component {
  render() {
    const { id, action } = this.props.navigation.state.params;
    const flatIndex = id - 1;

    const { spaces, location, squareMeters, nightPrice, monthlyPrice } = flats[flatIndex];
    return (
      <View>
        <Text>{location}</Text>
        <Text>{spaces} {spaces === 1 ? 'ambiente' : 'ambientes'}</Text>
        <Text>{squareMeters} metros cuadrados</Text>
        { 
          action === 'night' ?
            <Text>Precio por noche: ${nightPrice}</Text>
            : 
            <Text>Precio por mes: ${monthlyPrice}</Text>
        }
      </View>
    );
  }
}

export default Hire;
