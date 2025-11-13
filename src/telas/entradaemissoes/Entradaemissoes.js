/* Tela onde será informado os consumos*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style';


export default function Entradaemissoes({ navigation }) {
  const [consumoeletricidade, setconsumoeletricidade] = useState('');
  const [consumoagua, setconsumoagua] = useState('');
  const [consumogasolina, setconsumogasolina] = useState('');
  const [consumodiesel, setconsumodiesel] = useState('');
  const [consumogas, setconsumogas] = useState('');
  /**const [porteveiculo, setporteveiculo] = useState('');*/


  const calcular = () => {
    const gasto_energia = parseFloat(consumoeletricidade) || 0;
    const gasto_agua = parseFloat(consumoagua) || 0;
    const gasto_gasolina = parseFloat(consumogasolina) || 0;
    const gasto_diesel = parseFloat(consumodiesel) || 0;
    const gasto_gas = parseFloat(consumogas) || 0;


    if (
      gasto_energia > 0 ||
      gasto_agua > 0 ||
      gasto_gasolina > 0 ||
      gasto_diesel > 0 || gasto_gas > 0
    ) {
      navigation.navigate('Calculoemissoes', {
        energia: gasto_energia,
        agua: gasto_agua,
        gasolina: gasto_gasolina,
        diesel: gasto_diesel,
        gas: gasto_gas,
      })
    } else {
      Alert.alert('Atenção', 'Por favor responda ao menos uma das informações para continuar.');
    }
  };



  const [detalhes_energia, setdetalhes_energia] = useState(false);
  const [detalhes_agua, setdetalhes_agua] = useState(false);
  const [detalhes_gasolina, setdetalhes_gasolina] = useState(false);
  const [detalhes_diesel, setdetalhes_diesel] = useState(false);
  const [detalhes_gas, setdetalhes_gas] = useState(false);









  return (
    <SafeAreaView>
      <View>
        <ScrollView style={styles.scroll}>

          {/*<-- Bloco Consumo de energia*/}
          <View style={styles.body}>

            <Text style={styles.energia}> Consumo de energia: </Text>
            <View style={styles.container}>
              <Image
                style={styles.icon}
                source={require('../../../assets/energia.png')} />

              <TextInput
                style={styles.input}
                placeholder="Insira o consumo em Kwh"
                keyboardType='numeric'
                value={consumoeletricidade}
                onChangeText={setconsumoeletricidade}
              ></TextInput>
            </View>

            <View>
              <Text
                style={styles.energia}
                onPress={() => setdetalhes_energia(!detalhes_energia)}>
                Mais detalhes </Text>

              {detalhes_energia && (
                <View>
                  <Text style={styles.detalhes}>
                    O consumo de energia elétrica é referente à quantidade de eletricidade usada em residências, comércios ou indústrias para alimentar equipamentos, iluminação e aparelhos em geral.
                    Você pode verificar o consumo na sua conta de energia elétrica, normalmente indicado em kWh (quilowatt-hora).
                  </Text>
                  <Text style={styles.detalhes}> As emissões de eletricidade são calculadas com base no fator oficial do Sistema Interligado Nacional (SIN), publicado anualmente pelo MCTI. Esse fator representa a média da matriz elétrica brasileira no ano-base escolhido.
                  </Text>
                  <Text style={styles.detalhes}>Fator utilizado: 0,0385 kg CO₂/kWh Fonte: MCTI – Fator Médio para Inventários Corporativos
                  </Text>
                  <Text style={styles.detalhes}>Cálculo do fator usado A fórmula geral é:
                  </Text>
                  <Text style={styles.formula}> Emissão = kWh × Fator</Text>
                </View>
              )}
            </View>
          </View>



          {/*<-- Bloco Consumo de água*/}
          <View style={styles.body}>
            <Text style={styles.agua} >Consumo de água</Text>


            <View style={styles.container}>
              <Image
                style={styles.icon}
                source={require('../../../assets/agua.png')} />
              <TextInput
                style={styles.input}
                value={consumoagua}
                onChangeText={setconsumoagua}
                keyboardType='numeric'

                placeholder="Insira o consumo em m3"
              ></TextInput>
            </View>
            <View>
              <Text
                style={styles.agua}
                onPress={() => setdetalhes_agua(!detalhes_agua)}>
                Mais detalhes </Text>

              {detalhes_agua && (
                <Text>O cálculo considera as emissões geradas em todas as etapas do ciclo da água: captação, tratamento, distribuição e tratamento de esgoto.
                  Na ausência de dados locais, utilizamos fatores médios internacionais consolidados.

                  Fator utilizado: 0,40 kg CO₂e/m³ (água + esgoto)
                  Fonte atualizada: UK Government – GHG Conversion Factors 2025
                  https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting</Text>

              )}
            </View>
          </View>




          {/*<-- Bloco Consumo de Gasolina*/}
          <View style={styles.body}>
            <Text style={styles.gasolina}>Consumo de Gasolina</Text>

            <View style={styles.container}>
              <Image
                style={styles.icon}
                source={require('../../../assets/gasolina.png')} />
              <TextInput
                style={styles.input}
                value={consumogasolina}
                onChangeText={setconsumogasolina}
                keyboardType='numeric'

                placeholder="Insira o valor de gasolina em litros"
              ></TextInput>
            </View>
            <View>
              <Text
                style={styles.gasolina}
                onPress={() => setdetalhes_gasolina(!detalhes_gasolina)}>
                Mais detalhes </Text>

              {detalhes_gasolina && (
                <Text>As emissões de gasolina consideram a combustão completa do combustível no motor. O fator de emissão segue o padrão internacional do IPCC e representa o CO₂ liberado por litro consumido.

                  Fator utilizado: 2,27 kg CO₂ por litro
                  Como é calculado: Emissões = litros consumidos × 2,27
                  Fonte: IPCC 2006 – Mobile Combustion
                  https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html</Text>

              )}
            </View>



            {/*<-- Bloco Consumo de Diesel*/}
            <Text style={styles.diesel} >Consumo de Diesel</Text>
            <View style={styles.container}>
              <Image
                style={styles.icon}
                source={require('../../../assets/diesel.png')} />
              <TextInput
                style={styles.input}
                value={consumodiesel}
                onChangeText={setconsumodiesel}
                keyboardType='numeric'

                placeholder="Insira o valor de diesel em litros"
              ></TextInput>
            </View>

            <View>
              <Text
                style={styles.diesel}
                onPress={() => setdetalhes_diesel(!detalhes_diesel)}>
                Mais detalhes </Text>

              {detalhes_diesel && (
                <Text>O diesel possui maior densidade energética e, por isso, gera mais CO₂ por litro em comparação à gasolina. O cálculo segue o método oficial do IPCC.
                  Fator utilizado: 2,68 kg CO₂ por litro
                  Como é calculado: Emissões = litros consumidos × 2,68
                  Fonte: IPCC 2006 – Mobile Combustion
                  https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html</Text>

              )}
            </View>
          </View>



          {/*<-- Bloco Gás de cozinha*/}
          <View style={styles.body}>
            <Text style={styles.gas} >Gás de cozinha GLP</Text>

            <View style={styles.container}>
              <Image
                style={styles.icon}
                source={require('../../../assets/gas.png')} />
              <TextInput
                style={styles.input}
                value={consumogas}
                onChangeText={setconsumogas}
                keyboardType='numeric'

                placeholder="Insira o consumo em Kg"
              ></TextInput>
            </View>
            <View>
              <Text
                style={styles.gas}
                onPress={() => setdetalhes_gas(!detalhes_gas)}>
                Mais detalhes </Text>

              {detalhes_gas && (
                <Text>O GLP libera CO₂ durante a combustão. O fator de emissão segue as diretrizes do IPCC e é aplicado conforme o peso consumido.

                  Fator utilizado: 2,98 kg CO₂/kg
                  Botijão de 13 kg → ~38,7 kg CO₂e
                  Fonte: IPCC 2006 – Guidelines for National Greenhouse Gas Inventories
                  https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html</Text>

              )}
            </View>


          </View>

          <View>
            <Button
              title="Calcular" onPress={(calcular)} />
          </View>




        </ScrollView>

      </View>
    </SafeAreaView>
  );

}

