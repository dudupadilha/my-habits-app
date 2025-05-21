import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useActionSheet } from '@expo/react-native-action-sheet';

type HabitItemProps = {
  nome: string;
  onPress: () => void;
};

export function HabitItem({ nome, onPress }: HabitItemProps) {
  const [feito, setFeito] = useState(false);
  const { showActionSheetWithOptions } = useActionSheet();

  useEffect(() => {
    if (feito) {
      console.log(`Hábito "${nome}" concluído!`);
    }
  }, [feito]);

  const handleLongPress = () => {
    const options = ['Marcar como feito', 'Detalhes', 'Excluir', 'Cancelar'];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
        tintColor: '#4CAF50', // Cor verde
      },
      (buttonIndex) => {
        if (buttonIndex === 0) setFeito(!feito);
        else if (buttonIndex === 1) onPress();
        else if (buttonIndex === 2) {
          Alert.alert(
            'Excluir Hábito',
            `Deseja realmente excluir "${nome}"?`,
            [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Excluir', style: 'destructive' },
            ]
          );
        }
      }
    );
  };

  return (
    <Pressable
      style={[styles.container, feito && styles.completed]}
      onPress={onPress}
      onLongPress={handleLongPress}
      android_ripple={{ color: '#eee' }}
    >
      <Ionicons
        name={feito ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={feito ? '#4CAF50' : '#666'}
      />
      <Text style={[styles.text, feito && styles.completedText]}>{nome}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333', 
  },
  completed: {
    backgroundColor: '#E8F5E9',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#666', 
  },
});