import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNav, TabNavigation } from './components/lac-40-45/Navigations';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <StackNav /> */}
      <TabNavigation />
    </View>
  );
}

