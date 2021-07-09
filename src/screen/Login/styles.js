import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7510',
    },

    viewLogo:{
      bottom: 90,
      left: 22,
    },
    logo:{
      resizeMode: 'contain',
      width: 60,
    },

    viewText: {
      width: 280,
      bottom: 120,
      left: 40,
    },
    textSup: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    textInf: {
      color: '#fff',
      fontSize: 16,      
    },

    viewLogin:{
      padding: 40,
      backgroundColor: '#f29000',
      width: 380,
      height: 230,
      bottom: 10,
      left: 10,
      borderRadius: 7,
      justifyContent: 'center',
      // alignItems: 'center',
    },
    entradas:{
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#fff',
    },
    switch:{
      width: 25,
    },
    switchText:{
      color: '#fff',
      fontSize: 16,
    },
    viewSwitch: {
      flexDirection: 'row',
      padding: 20,      
    },
    buttonStyles:{
      backgroundColor: '#fff',
      borderRadius: 5,
      height: 50,
      width: 300,
      justifyContent: 'center',      
    },

    viewIcons:{
      backgroundColor: '#d75413',
      height: 150,
      bottom: 10,
      padding: 20,
    },
    Icons:{
      flexDirection: 'row',
      justifyContent: 'space-around',        
    },
    textIcons:{
      flexDirection: 'row',
      justifyContent: 'space-around', 
      color: '#fff',
      fontSize: 18,     
    },
  });

  export default styles;
  