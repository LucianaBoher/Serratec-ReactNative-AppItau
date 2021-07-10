import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerNumeros: { 
     bottom: "85%",
     flexDirection: 'row',
     flexWrap: 'wrap',
     padding: 40, 
     justifyContent: 'center',
  },
  textoNumeros: {
     fontSize: 14,
     fontWeight: 'bold',
     color: '#808080',
  },
  cartaoCorpo: {
     width: "25%",
     height: "25%",     
     margin: "2%",
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff',
     borderRadius: 5,
  },
});

export default styles;