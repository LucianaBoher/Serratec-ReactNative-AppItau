import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Login/Login';
import SenhaEletronica from '../screen/SenhaEletronica/SenhaEletronica';

const Stack = createStackNavigator();

const RotaAutenticacao = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SenhaEletronica' component={SenhaEletronica} />
    </Stack.Navigator>
  );
};

export default RotaAutenticacao;
