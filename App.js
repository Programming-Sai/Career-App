import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginSignUp from './components/LoginSignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <LoginSignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
