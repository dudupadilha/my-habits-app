import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Novo() {
  const [texto, setTexto] = useState('');
  const router = useRouter();

  const salvarHabito = () => {
    if (texto.trim() === '') return;
    router.push({ pathname: '/', params: { novoHabito: texto } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do novo hábito:</Text>
      <TextInput
        placeholder="Ex: Dormir cedo"
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Salvar" onPress={salvarHabito} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor:'#fff'},
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
});
