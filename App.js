import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entradaemissoes from './src/telas/entradaemissoes/Entradaemissoes';
import Calculoemissoes from './src/telas/calculoemissoes/Calculoemissoes';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaInicial'>
        <Stack.Screen name = 'TelaInicial' component={Entradaemissoes} options={{title: 'Informe suas emissões abaixo:'}}/>
        <Stack.Screen name='Calculoemissoes' component={Calculoemissoes} options={{title:'Resultado das Emissões'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )}