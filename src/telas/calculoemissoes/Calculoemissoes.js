//Aba focada em realizar os calculos informados am Entradaemissoes.js


import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';



export default function Calculoemissoes({ route, navigation }) {
    const { energia, agua, gasolina, diesel , gas } = route.params;

    const gasto_energia = parseFloat(energia) || 0;
    const gasto_agua = parseFloat(agua) || 0;
    const gasto_gasolina = parseFloat(gasolina) || 0;
    const gasto_diesel = parseFloat(diesel) || 0;
    const gasto_gas = parseFloat(gas) || 0;


    const calculo_energia = gasto_energia * 0.0385;
    const calculo_agua = gasto_agua * 0.40;
    const calculo_gasolina = gasto_gasolina * 2.27;
    const calculo_diesel = gasto_diesel * 2.68;
    const calculo_gas = gasto_gas * 2.98 ;


    const calculo_total = calculo_energia + calculo_agua + calculo_gasolina + calculo_diesel + calculo_gas;

    return (
        <View>
            <Text>Resultado das Emissões</Text>
            <Text>Resultados:</Text>

            <Text>Energia(Kwh): {calculo_energia}</Text>
            <Text>Água(M3): {calculo_agua} </Text>
            <Text>Gasolina(L): {calculo_gasolina} </Text>
            <Text>Gás(Kg): {calculo_gas}</Text>


            <Text>Total: {calculo_total}</Text>

            <Button
                title='Voltar'
                onPress={() =>
                    navigation.navigate('TelaInicial')}
            />



        </View>
    );
}