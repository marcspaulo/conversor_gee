/*Aba focada em estilizar a pagina Tela Inicial / Entradaemissoes*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    body: {
        flexDirection: 'column',
        backgroundColor: '#e6e6e6ff',
        textAlign: 'center',
    },

     button: {
    },
   
   
    input: {
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
    },

        energia: {
            backgroundColor:'#ff8800',
            color: '#fff',
            paddingVertical: 12,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            fontWeight: 'bold',
            marginBottom: 4,
       
    },

       agua: {
            backgroundColor:'#0033ffff',
            color: '#fff',
            paddingVertical: 12,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            fontWeight: 'bold',
            marginBottom: 4,
       
    },

       gasolina: {
            backgroundColor:'#00712bff',
            color: '#fff',
            paddingVertical: 12,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            fontWeight: 'bold',
            marginBottom: 4,
       
    },

       diesel: {
            backgroundColor:'#00712bff',
            color: '#fff',
            paddingVertical: 12,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            fontWeight: 'bold',
            marginBottom: 4,
       
    },

       gas: {
            backgroundColor:'#646063ff',
            color: '#fff',
            paddingVertical: 12,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            fontWeight: 'bold',
            marginBottom: 4,
       
    },



    



})


export default styles;


