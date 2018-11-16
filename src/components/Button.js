import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ label, onPress, color }) => (
    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: color }]} onPress={onPress} >
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonStyle: {
    height: 25,
    borderRadius: 5,
    borderWidth: 1
  },
  textStyle: {
    textAlign: 'center'
  }
});

Button.propTypes = {

};

export default Button;
