import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Abertura from './screens/Abertura';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Questionario from './screens/Questionario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Abertura" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Abertura" component={Abertura} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Questionario" component={Questionario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}