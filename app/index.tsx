import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { HabitItem } from '../components/HabitItem';
import { mockHabitos } from '@/mocks/mocks';

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
        color="#4CAF50"
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