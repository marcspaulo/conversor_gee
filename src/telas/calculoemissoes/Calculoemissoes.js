//Aba focada em realizar os calculos informados am Entradaemissoes.js


import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
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

    return (
        <ScrollView>
            <Text>Relatório das emissões geradas</Text>

            <View>
                <Text>Total de CO² emitido </Text>
                <Text>{calculo_total} kg CO²</Text>
            </View>

            <View>
                <Text>Energia Elétrica</Text>
                <Text>Emissão: {calculo_energia}</Text>
            </View>

            <View>
                <Text>Água:</Text>
                <Text>Emissão: {calculo_agua}</Text>
            </View>

             <View>
                <Text>Combustíveis</Text> 
                <Text>Total: {calculo_combustivel} </Text>
                <Text>Gasolina: {calculo_gasolina}l </Text>
                <Text>Diesel: {calculo_diesel} l</Text>
            </View>

            <View>
                <Text>Gás de Cozinha (GLP)</Text>
                <Text>{calculo_gas}</Text>
            </View>

            <Button
                title='Voltar'
                onPress={() =>
                    navigation.navigate('TelaInicial')}
            />



        </ScrollView>
    );
}