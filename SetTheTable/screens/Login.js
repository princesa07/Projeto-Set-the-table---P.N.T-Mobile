import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo de volta,</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Questionario')} />
      <Text onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
        Criar conta
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 },
  link: { color: 'blue', marginTop: 10 }
});