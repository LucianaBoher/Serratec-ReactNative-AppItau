import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native'
import styles from './styles'
import InputText from '../../components/InputText/InputText'
import Numeros from '../../components/CardsNumeros/Numeros'
import Button from '../../components/Button/Button';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TopBar from '../../components/TopBar/TopBar';
import AtalhosIcons from '../../components/AtalhosIcons/AtalhosIcons';


const SenhaEletronica = (props) => {

    const [senhaEletronica, setSenhaEletronica] = useState('');

    const iniciais = <Image source={require('../../../assets/iniciais.png')} />

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#2e2e2e', '#d3d3d3']}
                style={{ height: "100%", width: "100%" }}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 0.0, y: 0.0 }}>

                <View>
                    <View style={styles.statusBar} />
                    <TopBar iniciais={iniciais} identificacao={'olá, Luciana'} contaAgencia={'ag ..33  c/c ...92-0'} />
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
                    <Button titulo='esqueci minha senha'
                        buttonStyles={styles.buttonEsqSenha}
                        buttonTitulo={styles.EsqueciSenhaText}
                        onPress={() => Linking.openURL('http://google.com')} />
                </View>

                <View style={styles.viewIcons}>
                    <AtalhosIcons />
                </View>

            </LinearGradient>

        </View>
    );
};

export default SenhaEletronica;