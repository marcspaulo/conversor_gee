//Aba focada em realizar os calculos informados am Entradaemissoes.js


import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';



export default function Calculoemissoes({ route, navigation }) {
    const { energia, agua, combustivel, gas } = route.params;

    const gasto_energia = parseFloat(energia) || 0;
    const gasto_agua = parseFloat(agua) || 0;
    const gasto_combustivel = parseFloat(combustivel) || 0;
    const gasto_gas = parseFloat(gas) || 0;


    const calculo_energia = gasto_energia * 0.055;
    const calculo_agua = gasto_agua * 0.50;
    const calculo_combustivel = gasto_combustivel * 2.31;
    const calculo_gas = gasto_gas * 1.5;


    const calculo_total = calculo_energia + calculo_agua + calculo_combustivel + calculo_gas;

    return (
        <View>
            <Text>Resultado das Emissões</Text>
            <Text>Resultados:</Text>

            <Text>Energia(Kwh): {calculo_energia}</Text>
            <Text>Água(M3): {calculo_agua} </Text>
            <Text>Combustivel(L): {calculo_combustivel} </Text>
            <Text>Gás(Kg): {calculo_gas}</Text>


            <Text>Total: {calculo_total}</Text>

            <Button
                title='Voltar'
                onPress={() =>
                    navigation.goBack()}
            />



        </View>
    );
}