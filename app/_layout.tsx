import { Slot } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { View } from 'react-native';

export default function Layout() {
  return (
    <ActionSheetProvider>
      <View style={{ flex: 1 }}>
        <Slot screenOptions={{}}/>
      </View>
    </ActionSheetProvider>
  );
}