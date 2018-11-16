import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
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
        <View style={{ flex: 1 }}>
          <View style={styles.titleContainerStyle}>
            <Text style={styles.titleTextStyle}>Alquile departamentos!</Text>
          </View>
          <ScrollView contentContainerStyle={styles.flatsListContainerStyle}>
            {this.renderFlats()}
          </ScrollView>
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
    borderWidth: 1,
    backgroundColor: 'green',
    height: 50,
    justifyContent: 'center'
  },
  titleTextStyle: {
    fontWeight: '900',
  },
  flatsListContainerStyle: {
    justifyContent: 'flex-start',
    flex: 1
  }
});
