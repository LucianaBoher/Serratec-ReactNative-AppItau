import React, { useState } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import InputText from '../../components/InputText/InputText'
import Button from '../../components/Button/Button';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SenhaEletronica = () => {

    const [senhaEletronica, setSenhaEletronica] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.viewLogin}>
                <View style={styles.entradas}>
                    <Text style={styles.switchText}>senha eletrônica</Text>
                    <InputText value={senhaEletronica} onChangeText={setSenhaEletronica} />
                </View>
                <Button titulo='acessar' buttonStyles={styles.buttonStyles} />
            </View>

            <View style={styles.viewIcons}>
                <View style={styles.Icons}>
                    <Feather name="command" size={40} color="white" />
                    <MaterialCommunityIcons name="toggle-switch-off-outline" size={40} color="white" />
                    <EvilIcons name="question" size={50} color="white" />
                </View>
                <View style={styles.textIcons}>
                    <Text style={styles.textIcons}>Pix</Text>
                    <Text style={styles.textIcons}>iToken</Text>
                    <Text style={styles.textIcons}>ajuda</Text>
                </View>
            </View>

        </View>
    );
};

export default SenhaEletronica;