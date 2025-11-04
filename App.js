import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [valoreletricidade, setvaloreletricidade] = useState('');

  return (
    <View>
      <Text >Consumo de energia</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#fc0707ff'}
        placeholder="Insira o consumo em Kwh"
        keyboardType='numeric'
        value={valoreletricidade}
        onChangeText={setvaloreletricidade}
      ></TextInput>

      <Text>Consumo de água</Text>
      <TextInput
        placeholder="Insira o consumo em m3"
      ></TextInput>


      <Text>Consumo de combustível</Text>
      <TextInput
        placeholder="Insira o valor de combustível gasto"
      ></TextInput>


      <Text>Gás de cozinha</Text>
      <TextInput
        placeholder="Insira o valor"
      ></TextInput>


      <text>você digitou: {valoreletricidade}</text>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
