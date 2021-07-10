import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';  

const Numeros = () => {

  const icon = <Ionicons name="backspace-outline" size={24} color="grey" />

  return (    
      <View style={styles.containerNumeros}>
        <Card texto={'0 ou 7'}/>
        <Card texto={'1 ou 8'}/>
        <Card texto={'2 ou 5'}/>
        <Card texto={'3 ou 6'}/>
        <Card texto={'4 ou 9'}/>
        <Card texto={icon}/>    
      </View>    
  );
};

export default Numeros