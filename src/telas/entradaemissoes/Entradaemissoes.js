/* Tela onde será informado os consumos*/

import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


export default function Entradaemissoes({navigation}) {
  const [consumoeletricidade, setconsumoeletricidade] = useState('');
  const [consumoagua, setconsumoagua] = useState('');
  const [consumocombustivel, setconsumocombustivel] = useState('');
  const [consumogas, setconsumogas] = useState('');

  return (
    <View>

      <View> {/*<-- Bloco Consumo de energia*/}
        <Text>Inserir aqui um texto breve sobre consumo</Text>
        <Text >Consumo de energia</Text>
        <TextInput
          placeholderTextColor={'#fc0707ff'}
          placeholder="Insira o consumo em Kwh"
          keyboardType='numeric'
          value={consumoeletricidade}
          onChangeText={setconsumoeletricidade}
        ></TextInput>
      </View>




      <View> {/*<-- Bloco Consumo de água*/}
        <Text>Consumo de água</Text>
        <TextInput
          value={consumoagua}
          onChangeText={setconsumoagua}
          placeholder="Insira o consumo em m3"
        ></TextInput>
      </View>



      <View> {/*<-- Bloco Consumo de combustível*/}
        <Text>Consumo de combustível</Text>
        <TextInput
          value={consumocombustivel}
          onChangeText={setconsumocombustivel}
          placeholder="Insira o valor de combustível gasto"
        ></TextInput>
      </View>



      <View>  {/*<-- Bloco Gás de cozinha*/}
        <Text>Gás de cozinha</Text>
        <TextInput
          value={consumogas}
          onChangeText={setconsumogas}
          placeholder="Insira o valor"
        ></TextInput>
      </View>


      <Text>você digitou: {consumoeletricidade}...{consumoagua}</Text>

      <Button
      title="Calcular Emissões"
      onPress={() => 
        navigation.navigate('Calculoemissoes',{
          energia: consumoeletricidade,
          agua: consumoagua,
          combustivel: consumocombustivel,
          gas: consumogas
        })

      } 
      />

    </View >

   





  );

}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/
