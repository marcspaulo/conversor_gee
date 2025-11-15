import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        padding: 16,
    },

    titulo: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1C1C1C",
    },

    subtitulo: {
        fontSize: 32,
        fontWeight: "700",
        marginTop: 8,
        color: "#1C1C1C",
    },

    bloco: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        elevation: 3,
    },

    bloco_total: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 16,
        elevation: 4,
        marginBottom: 16,
    },

    icon: {
        width: 40,
        height: 50,
        marginRight: 2,
        resizeMode: 'contain',
    },

    colunaCentro: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'flex-start',
    },

    titulo_texto: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1A1A1A',
        textAlign: 'center',
    },

    bloco_info: {
        marginTop: 3,
    },

    bloco_calculo: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },

    emissao: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginLeft: 12,
    },

    arvore: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginVertical: 20,
        resizeMode: 'contain',
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
        paddingBottom: 40,
    },


     subtitulo_emissao: {
        fontSize: 32,
        fontWeight: "700",
        marginTop: 8,
        color: "#1C1C1C",
        textAlign: 'center'
    },

});
