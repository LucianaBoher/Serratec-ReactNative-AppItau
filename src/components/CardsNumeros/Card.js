import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/Button/Button';

const Card = (props) => {
  return (
    <View style={styles.cartaoCorpo}>
        <Button titulo={props.texto} style={styles.textoNumeros} />        
    </View>
  );
}

export default Card