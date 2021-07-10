import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native'
import styles from './styles'
import InputText from '../../components/InputText/InputText'
import Button from '../../components/Button/Button';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Login = (props) => {

    const [agencia, setAgencia] = useState('');
    const [conta, setConta] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const alternarSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#d75413', '#ff7510']}
                style={{ height: "100%", width: "100%" }}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 0.0, y: 0.0 }}>

                <View style={styles.viewLogo}>
                    <Image source={require('../../../assets/itauLogo.png')}
                        style={styles.logo} />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.textSup}>Quer pagar e receber a qualquer hora e de graça?</Text>
                    <Text style={styles.textInf}>Chegou o Pix com um Itaú de segurança. Cadastre-se!</Text>
                </View>
                <View style={styles.viewLogin}>
                    <View style={styles.entradas}>
                        <InputText value={agencia} onChangeText={setAgencia} placeholder={'agência'} />
                        <InputText value={conta} onChangeText={setConta} placeholder={'conta'} />
                    </View>
                    <View style={styles.viewSwitch}>
                        <Switch style={styles.switch}
                            trackColor={{ false: '#d3d3d3', true: '#d75413' }}
                            thumbColor={isEnabled ? '#fff' : '#fff'}
                            onValueChange={alternarSwitch}
                            value={isEnabled} />
                        <Text style={styles.switchText}>lembrar agência e conta</Text>
                    </View>
                    <Button titulo='ok' buttonStyles={styles.buttonStyles} buttonTitulo={styles.buttonTitulo}
                        onPress={() => props.navigation.navigate('SenhaEletronica')} />
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

            export default Login;