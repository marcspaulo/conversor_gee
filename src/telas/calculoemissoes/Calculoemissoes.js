//Aba focada em realizar os calculos informados am Entradaemissoes.js


import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';



export default function Calculoemissoes({ route, navigation }) {
    const { energia, agua, gasolina, diesel , gas } = route.params;

    const calculo_energia = energia * 0.0385;
    const calculo_agua = agua * 0.40;
    const calculo_gasolina = gasolina * 2.27;
    const calculo_diesel = diesel * 2.68;
    const calculo_gas = gas * 2.98 ;


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