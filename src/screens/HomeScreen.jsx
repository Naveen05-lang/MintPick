import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from '../auth/authService';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut();
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen 🎉</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22, marginBottom: 20 },
});
