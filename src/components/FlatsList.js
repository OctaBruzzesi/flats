import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import flats from '../assets/flats.json';

export default class FlatsLists extends Component {
  renderFlats() {
    return flats.map(flat => (
        <Text>{flat.location}</Text>
      ));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleTextStyle}>Hire Flats!</Text>
        </View>
        <View style={styles.flatsListContainerStyle} >
          {this.renderFlats()}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainerStyle: {
    alignItems: 'center',
    backgroundColor: '#8DDD00',
    flex: 1,
    justifyContent: 'center'
  },
  titleTextStyle: {
    fontWeight: '900'
  },
  flatsListContainerStyle: {
    flex: 10,
    marginTop: 250
  }
});
