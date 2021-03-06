import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    statusBar:{      
      backgroundColor: '#d3d3d3',
      height: "10%",
    },
    
    viewLogin:{
      padding: 40,
      width: "86%",
      height: "40%",
      bottom: "26%",
      justifyContent: 'center',
      left: "7%",
    },
    senhaText:{
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      bottom: "10%",
    },
    entrada:{ 
      bottom: "22%",      
      borderBottomWidth: 2,
      borderColor: '#fff',
    },

    viewButton:{
      padding: 40,
      width: "100%",
      height: "40%",
      bottom: "77%",      
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyles:{
      backgroundColor: '#fff',
      borderRadius: 5,
      height: "27%",
      width: "83%",
      justifyContent: 'center',     
    },
    buttonTitulo: {
      textAlign: 'center',
      fontSize: 18,
      color: '#808080',
    },

    EsqueciSenhaText:{
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
      top: "5%",
    },
    buttonEsqSenha:{
      backgroundColor: 'transparent',
      padding: "3%",
    },

    viewIcons:{
      height: "100%",
      bottom: "70%",
      padding: 20,
    },
  });

  export default styles;
  