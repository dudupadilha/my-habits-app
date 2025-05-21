import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { HabitItem } from '../components/HabitItem';

type Habito = {
  id: number;
  nome: string;
};

export default function Home() {
  const { novoHabito } = useLocalSearchParams();
  const [habitos, setHabitos] = useState<Habito[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Hábitos mockados iniciais
    const mockHabitos = [
      { id: 1, nome: 'Acordar 06:30' },
      { id: 2, nome: 'Escovar os dentes' },
      { id: 3, nome: 'Tomar banho' },
      { id: 4, nome: 'Tomar café saudável' },
      { id: 5, nome: 'Estudar' },
      { id: 6, nome: 'Assistir série' },
      { id: 7, nome: 'Assistir o Gremio(melhor do mundo)' },
      { id: 8, nome: 'Revisar' },
      { id: 9, nome: 'Teste1' },
      { id: 10, nome: 'Teste2' },
      { id: 11, nome: 'Teste3' },
      { id: 12, nome: 'Teste4' },
      { id: 13, nome: 'Teste5' },
    ];
    setHabitos(mockHabitos);

    if (novoHabito && typeof novoHabito === 'string') {
      const novo = {
        id: Date.now(),
        nome: novoHabito,
      };
      setHabitos((prev) => [...prev, novo]);
      router.setParams({ novoHabito: undefined });
    }
  }, [novoHabito]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Hábitos</Text>
      <FlatList
        data={habitos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HabitItem 
            nome={item.nome} 
            onPress={() => router.push(`/detalhes/${item.nome}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum hábito cadastrado ainda.</Text>
        }
      />
      <Button 
        title="Adicionar Hábito" 
        onPress={() => router.push('/novo')} 
        color="#4CAF50" // Cor verde
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5' // Fundo cinza claro
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 20, 
    color: '#333' // Texto escuro
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666', // Texto cinza
  },
});