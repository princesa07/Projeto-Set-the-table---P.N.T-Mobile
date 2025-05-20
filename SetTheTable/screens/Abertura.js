import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Abertura({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do seu jeito, no seu ritmo, à sua mesa</Text>
      <Button title="→" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  text: { fontSize: 20, textAlign: 'center', marginBottom: 20 }
});