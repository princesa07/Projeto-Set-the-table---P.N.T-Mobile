import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeira vez aqui?</Text>
      <TextInput style={styles.input} placeholder="Nome completo" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <Button title="→" onPress={() => navigation.navigate('Questionario')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 }
});