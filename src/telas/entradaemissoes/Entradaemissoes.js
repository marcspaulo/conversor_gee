/* Tela onde será informado os consumos*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import styles from './style';


export default function Entradaemissoes({ navigation }) {
  const [consumoeletricidade, setconsumoeletricidade] = useState('');
  const [consumoagua, setconsumoagua] = useState('');
  const [consumogasolina, setconsumogasolina] = useState('');
  const [consumodiesel, setconsumodiesel] = useState('');
  const [consumogas, setconsumogas] = useState('');
  const [porteveiculo, setporteveiculo] = useState('');


  return (
    <View>

      {/*<-- Bloco Consumo de energia*/}
      <View style={styles.body}>

        <Text style={styles.energia}> Consumo de energia: </Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o consumo em Kwh"
          keyboardType='numeric'
          value={consumoeletricidade}
          onChangeText={setconsumoeletricidade}
        ></TextInput>

      </View>
      <Text> *Inserir aqui um texto breve sobre consumo de energia </Text>




      {/*<-- Bloco Consumo de água*/}
      <View style={styles.body}>
        <Text>Consumo de água</Text>
        <TextInput
          style={styles.input}
          value={consumoagua}
          onChangeText={setconsumoagua}
          placeholder="Insira o consumo em m3"
        ></TextInput>
      </View>


      {/*<-- Bloco Consumo de combustível*/}
      <View style={styles.body}>
        <Text>Consumo de Gasolina</Text>
        <TextInput
          style={styles.input}
          value={consumogasolina}
          onChangeText={setconsumogasolina}
          placeholder="Insira o valor de gasolina em litros"
        ></TextInput>

        <Text>Consumo de Diesel</Text>
        <TextInput
          style={styles.input}
          value={consumodiesel}
          onChangeText={setconsumodiesel}
          placeholder="Insira o valor de diesel em litros"
        ></TextInput>
      </View>


      {/*<-- Bloco Gás de cozinha*/}
      <View style={styles.body}>
        <Text>Gás de cozinha</Text>
        <TextInput
          style={styles.input}
          value={consumogas}
          onChangeText={setconsumogas}
          placeholder="Insira o valor"
        ></TextInput>
      </View>


      <Text>você digitou: {consumoeletricidade}...{consumoagua}</Text>

      <Button
        title="Calcular"
        onPress={() =>
          navigation.navigate('Calculoemissoes', {
            energia: consumoeletricidade,
            agua: consumoagua,
            gasolina: consumogasolina,
            diesel: consumodiesel,
            gas: consumogas
          })

        }
      />

    </View >







  );

}

