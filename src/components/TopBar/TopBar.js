import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';

const TopBar = () => {

    const Left = <Image source={require('../../../assets/iniciais.png')} />
    const icon = <AntDesign name="down" size={24} color="black" />

    return (
        <View style={styles.container}>
            <Text style={{ bottom: 13 }}>{Left}</Text>
            <View style={styles.viewTextinho}>
                <Text style={{ color: '#0020ff', fontWeight:'bold' }}>olá, Luciana</Text>
                <Text>ag ..33  c/c ...92-0</Text>
            </View>
            <Text>{icon}</Text>
        </View>
    );
}

export default TopBar;