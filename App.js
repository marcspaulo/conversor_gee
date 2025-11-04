import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const[valoreletricidade,setvaloreletricidade] = useState('');

  return (
    <View style={styles.container}>
      <Text>Ola mundo</Text>
      <StatusBar style="auto" />

    <Text >Eletricidade</Text>
    <TextInput 
    style={styles.input}
    placeholder="Insira o consumo em Kwh"
    keyboardType='numeric'
    value={valoreletricidade}
    onChangeText={setvaloreletricidade}
    >
    </TextInput>

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
