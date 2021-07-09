import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputText = (props) => {
  return (    
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.textInput}
        placeholderTextColor={'#fff'}
      />    
  );
};

export default InputText;
