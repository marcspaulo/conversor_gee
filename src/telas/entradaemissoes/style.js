/*Aba focada em estilizar a pagina Tela Inicial / Entradaemissoes*/

import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    body: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 20,
        flex: 1,
    },

    responsive: {
        flex: 1,
        backgroundColor: '#fff',
    },

    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd'

    },

    scroll: {
        flexGrow: 1,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e6e6e6ff',
       borderRadius: 6,
        paddingHorizontal: 10,

    },

    icon: {
     width: 45,      
        height: 45,
        resizeMode: 'contain',
        marginRight: 8,

    },


    input: {

        textAlign: 'left',
        paddingVertical: 6,
        fontSize: 14,
        flex: 1,
        alignSelf: 'stretch',

    },



    energia: {
        backgroundColor: '#ff8800',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        paddingHorizontal: 15,


    },

    agua: {
        backgroundColor: '#0033ffff',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },

    gasolina: {
        backgroundColor: '#00712bff',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },

    diesel: {
        backgroundColor: '#00712bff',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },

    gas: {
        backgroundColor: '#646063ff',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },







})


export default styles;


