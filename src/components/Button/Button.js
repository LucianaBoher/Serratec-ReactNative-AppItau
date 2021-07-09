import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyles} >
      <Text style={styles.titulo}>{props.titulo}</Text>
    </TouchableOpacity>
  );
};

export default Button;