import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    statusBar:{      
      backgroundColor: '#d75413',
      height: "20%",
    },

    viewLogo:{
      bottom: "35%",
      left: "5%",
    },
    logo:{
      resizeMode: 'contain',
      width: "14%",
    },

    viewText: {
      width: 280,
      bottom: "50%",
      left: "10%",
    },
    textSup: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textInf: {
      color: '#fff',
      fontSize: 16,      
    },

    viewLogin:{
      padding: 40,
      backgroundColor: '#f29000',
      width: "100%",
      height: "30%",
      bottom: "28%",
      // alignItems: 'center',
      left: "3%",          //copiando o pequeno deslocamento do App do Itaú....
      borderRadius: 9,
      justifyContent: 'center',      
    },
    entradas:{
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderColor: '#fff',
    },
    switch:{
      width: "10%",
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
      height: "41%",
      width: "100%",
      justifyContent: 'center',      
    },
    buttonTitulo: {
      textAlign: 'center',
      fontSize: 18,
      color: '#808080',
    },

    viewIcons:{
      height: "15%",
      bottom: "30%",
      padding: 20,
      justifyContent: 'center',
      textAlign: 'center',
    },
  });

  export default styles;
  