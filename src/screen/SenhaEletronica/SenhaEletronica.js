import React, { useState } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import InputText from '../../components/InputText/InputText'
import Numeros from '../../components/CardsNumeros/Numeros'
import Button from '../../components/Button/Button';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TopBar from '../../components/TopBar/TopBar';


const SenhaEletronica = () => {

    const [senhaEletronica, setSenhaEletronica] = useState('');

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#2e2e2e', '#d3d3d3']}
                style={{ height: "100%", width: "100%" }}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 0.0, y: 0.0 }}>

                <View>
                    <View style={styles.statusBar} />
                    <TopBar />
                </View>

                <View style={styles.viewLogin}>
                    <Text style={styles.senhaText}>senha eletrônica</Text>
                    <EvilIcons name="lock" size={34} color="white" />
                    <View style={styles.entrada}>
                        <InputText value={senhaEletronica} onChangeText={setSenhaEletronica} />
                    </View>
                </View>

                <Numeros />

                <View style={styles.viewButton}>
                    <Button titulo='acessar' buttonStyles={styles.buttonStyles} buttonTitulo={styles.buttonTitulo} />
                    <Text style={styles.EsqueciSenhaText}>esqueci minha senha</Text>
                </View>

                <View style={styles.viewIcons}>
                    <View style={styles.Icons}>
                        <Feather name="command" size={25} color="white" />
                        <MaterialCommunityIcons name="toggle-switch-off-outline" size={25} color="white" />
                        <EvilIcons name="question" size={35} color="white" />
                    </View>
                    <View style={styles.textIcons}>
                        <Text style={styles.textIcons}>Pix</Text>
                        <Text style={styles.textIcons}>iToken</Text>
                        <Text style={styles.textIcons}>ajuda</Text>
                    </View>
                </View>

            </LinearGradient>

        </View>
    );
};

export default SenhaEletronica;