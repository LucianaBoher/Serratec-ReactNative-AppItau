import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d3d3d3',
    },    
    viewLogin:{
      padding: 40,
      width: 380,
      height: 230,
      top: 50,     
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    entradas:{
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#fff',
    },
    buttonStyles:{
      backgroundColor: '#fff',
      borderRadius: 5,
      height: 50,
      width: 300,
      justifyContent: 'center',      
    },

    viewIcons:{
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
  