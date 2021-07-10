import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';

const TopBar = (props) => {
    
    const iconDown = <AntDesign name="down" size={24} color="#0020ff" />

    return (
        <View style={styles.container}>
            <Text style={styles.iniciais}>{props.iniciais}</Text>
            <View style={styles.viewIdentificacao}>
                <Text style={styles.identificacao}>{props.identificacao}</Text>
                <Text>{props.contaAgencia}</Text>
            </View>
            <Text>{iconDown}</Text>
        </View>
    );
}

export default TopBar;