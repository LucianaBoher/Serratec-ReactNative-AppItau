import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyles} onPress={props.onPress} >
      <Text style={props.buttonTitulo}>{props.titulo}</Text>
    </TouchableOpacity>
  );
};

export default Button;