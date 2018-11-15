import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class FlatsLists extends Component {
  render() {
    return (
      <View>
        <View style={styles.titleContainerStyle}>
          <Text>Hire Flats!</Text>
        </View>
        <View style={styles.flatsListContainerStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainerStyle: {
    flex: 3
  },
  flatsListContainerStyle: {
    flex: 8
  }
});
