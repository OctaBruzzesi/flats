import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import FlatItem from './FlatItem';
import flats from '../assets/flats.json';

export default class FlatsLists extends Component {
  renderFlats() {
    return flats.map(flat => (
        <FlatItem key={flat.id} flat={flat} />
      ));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleTextStyle}>Alquile departamentos!</Text>
        </View>
        <View style={styles.flatsListContainerStyle} >
          {this.renderFlats()}
        </View>
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
    justifyContent: 'flex-start'
  }
});
