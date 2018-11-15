import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

export default class FlatsLists extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleTextStyle}>Hire Flats!</Text>
        </View>
        <View style={styles.flatsListContainerStyle} />
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
    flex: 10
  }
});
