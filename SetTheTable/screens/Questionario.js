import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';

export default function Questionario() {
  const [preferencia, setPreferencia] = useState('');
  const [dieta, setDieta] = useState('');
  const [alergias, setAlergias] = useState('');
  const [nivel, setNivel] = useState('');
  const [tempo, setTempo] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questionário</Text>
      <TextInput style={styles.input} placeholder="Suas preferências alimentares" value={preferencia} onChangeText={setPreferencia} />
      <Text>Você segue alguma das opções abaixo?</Text>
      <Picker selectedValue={dieta} onValueChange={(item) => setDieta(item)}>
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Vegetariano" value="vegetariano" />
        <Picker.Item label="Vegano" value="vegano" />
      </Picker>
      <TextInput style={styles.input} placeholder="Possui alergias ou intolerâncias?" value={alergias} onChangeText={setAlergias} />
      <Text>Como você se define na cozinha?</Text>
      <Picker selectedValue={nivel} onValueChange={(item) => setNivel(item)}>
        <Picker.Item label="Iniciante" value="iniciante" />
        <Picker.Item label="Intermediário" value="intermediario" />
        <Picker.Item label="Avançado" value="avancado" />
      </Picker>
      <Text>Tempo médio para cozinhar:</Text>
      <Picker selectedValue={tempo} onValueChange={(item) => setTempo(item)}>
        <Picker.Item label="Até 15 minutos" value="15" />
        <Picker.Item label="Até 30 minutos" value="30" />
        <Picker.Item label="Mais de 30 minutos" value="60" />
      </Picker>
      <Button title="Concluir" onPress={() => alert("Obrigado! Em breve, receitas personalizadas!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 }
});