import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const AtalhosIcons = (props) => {
    return (
        <View>
            <View style={styles.Icons}>
                <Feather name="command" size={20} color="white" />
                <MaterialCommunityIcons name="toggle-switch-off-outline" size={25} color="white" />
                <EvilIcons name="question" size={30} color="white" />
            </View>
            <View style={styles.textIcons}>
                <Text style={styles.textIcons}> Pix </Text>
                <Text style={styles.textIcons}>iToken</Text>
                <Text style={styles.textIcons}>ajuda</Text>
            </View>
        </View>
    );
};

export default AtalhosIcons;






