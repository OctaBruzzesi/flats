import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import FlatsList from './src/components/FlatsList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatsList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
