//Aba focada em realizar os calculos informados am Entradaemissoes.js


import React from 'react';
import { View, Text, Button, ScrollView, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style';



export default function Calculoemissoes({ route, navigation }) {
    const { energia, agua, gasolina, diesel, gas } = route.params;

    const calculo_energia = energia * 0.0385;
    const calculo_agua = agua * 0.40;
    const calculo_gasolina = gasolina * 2.27;
    const calculo_diesel = diesel * 2.68;
    const calculo_gas = gas * 2.98;


    const calculo_total = calculo_energia + calculo_agua + calculo_gasolina + calculo_diesel + calculo_gas;
    const calculo_combustivel = calculo_gasolina + calculo_diesel;

    const emissao_arvores = 21;
    const calculo_arvores = calculo_total / emissao_arvores



    return (
        <SafeAreaView>
            <ScrollView style={styles.scroll}>

                <View style={styles.body}>
                    <View style={styles.bloco_total}>
                        <Text style={styles.titulo}>Total de CO² emitido</Text>
                        <Text style={styles.subtitulo}>{calculo_total.toFixed(2)} kg CO²</Text>
                    </View>

                    {/* Energia */}
                    <View style={styles.bloco}>
                        <Image style={styles.icon} source={require('../../../assets/energia.png')} />

                        <View style={styles.colunaCentro}>
                            <Text style={styles.titulo_texto}>Energia Elétrica</Text>
                            <Text style={styles.bloco_calculo}>Emissão: {calculo_energia.toFixed(2)} kg CO²</Text>
                        </View>

                        <Text style={styles.emissao}>{energia} kWh</Text>
                    </View>

                    {/* Água */}
                    <View style={styles.bloco}>
                        <Image style={styles.icon} source={require('../../../assets/agua.png')} />

                        <View style={styles.colunaCentro}>
                            <Text style={styles.titulo_texto}>Água</Text>
                            <Text style={styles.bloco_calculo}>Emissão: {calculo_agua.toFixed(2)} kg CO²</Text>
                        </View>

                        <Text style={styles.emissao}>{agua} m³</Text>
                    </View>

                    {/* Combustíveis */}
                    <View style={styles.bloco}>
                        <Image style={styles.icon} source={require('../../../assets/veiculo.png')} />

                        <View style={styles.colunaCentro}>
                            <Text style={styles.titulo_texto}>Combustíveis</Text>
                            <Text style={styles.bloco_calculo}>Gasolina: {calculo_gasolina.toFixed(2)} kg CO²</Text>
                            <Text style={styles.bloco_calculo}>Diesel: {calculo_diesel.toFixed(2)} kg CO²</Text>
                        </View>

                        <Text style={styles.emissao}>{calculo_combustivel.toFixed(2)} L</Text>
                    </View>

                    {/* Gás GLP */}
                    <View style={styles.bloco}>
                        <Image style={styles.icon} source={require('../../../assets/gas.png')} />

                        <View style={styles.colunaCentro}>
                            <Text style={styles.titulo_texto}>Gás de Cozinha (GLP)</Text>
                            <Text style={styles.bloco_calculo}>Emissão: {calculo_gas.toFixed(2)} kg CO²</Text>
                        </View>

                        <Text style={styles.emissao}>{gas} kg</Text>
                    </View>

                    <View>
                        <Image
                            style={styles.arvore}
                            source={require('../../../assets/arvore.png')} />
                        <Text style={styles.titulo_texto}>Compensação de Emissões</Text>
                        <Text style={styles.titulo_texto}>Para neutralizar as emissões geradas, uma forma eficiente é o plantio de árvores.</Text>
                        <Text style={styles.titulo_texto}>Cada árvore adulta é capaz de absorver, em média, 21 kg de CO₂ por ano.</Text>
                        <Text style={styles.titulo_texto}>Com base no total emitido, calculamos automaticamente quantas árvores seriam necessárias para compensar a sua emissão atual.</Text>
                        
                        <View>
                            <Text style={styles.subtitulo_emissao}>{calculo_arvores.toFixed()} árvore(s). </Text>
                        </View>

                    </View>

                    <Button
                        title="Voltar"
                        onPress={() => navigation.navigate('TelaInicial')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}