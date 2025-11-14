/*Aba focada em estilizar a pagina Tela Inicial / Entradaemissoes*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    body: {
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 10,
    },

    responsive: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },

    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FAFAFA',
        borderTopWidth: 1,
        borderTopColor: '#ddd'

    },

    scroll: {
        flexGrow: 1,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
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
        backgroundColor: '#FAFAFA',


    },

    detalhes: {
        fontSize: 15,
        color: '#333',
        lineHeight: 22,
        textAlign: 'justify',
        marginBottom: 10,
    },

    formula: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },


    energia: {
        backgroundColor: '#FF9F45',
        color: '#fff',
        paddingVertical: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        paddingHorizontal: 15,


    },

    agua: {
        backgroundColor: '#4A90E2',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },

    gasolina: {
        backgroundColor: '#52B788',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },

    diesel: {
        backgroundColor: '#52B788',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },

    gas: {
        backgroundColor: '#FF6F61',
        color: '#fff',
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        fontWeight: 'bold',
        marginBottom: 4,

    },
})


export default styles;


