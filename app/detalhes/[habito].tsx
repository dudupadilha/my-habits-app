import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Detalhes() {
  const { habito } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>← Voltar</Text>
      </Pressable>
      
      <Text style={styles.title}>Detalhes do Hábito</Text>
      <View style={styles.detailCard}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.content}>{habito}</Text>
        
        <Text style={styles.label}>Progresso:</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5'
  },
  backButton: {
    marginTop: 20,
    marginBottom: 30,
  },
  backText: {
    color: '#4CAF50',
    fontSize: 16,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 30,
    color: '#333' 
  },
  detailCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  content: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '0%',
    backgroundColor: '#4CAF50',
  },
});