import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { sendHealthDataToLambda } from '../lib/health'; 

export default function App() {
  useEffect(() => {
    sendHealthDataToLambda(); 
  }, []);
  return (
    <View style={styles.container}>
      <Text>Tempus</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
