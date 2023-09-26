import { StyleSheet, Text, View } from 'react-native';
import react from 'react';
import Navigation from './component/Navigation';
import Home from './component/Home';
import Navbar from './component/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <Home />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});