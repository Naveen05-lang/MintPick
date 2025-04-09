import React, { useState } from 'react';
import {
  View, TextInput, Button, Text, StyleSheet, TouchableOpacity, SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../auth/authService';

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignIn = async () => {
    if (!email.trim() || !password) {
      setMsg('Email and password are required!');
      return;
    }

    const result = await signIn(email.trim(), password);
    if (result.error) {
      setMsg(result.error);
    } else {
      setMsg('');
      navigation.navigate('CategoryList');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Sign In</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#000"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign In" onPress={handleSignIn} />
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={{ color: '#1e90ff', fontWeight: 'bold' }}
            >
              Sign Up
            </Text>
          </Text>
        {msg ? <Text style={styles.error}>{msg}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  form: {
    marginRight:10,
    marginLeft:10,
    backgroundColor: 'lightgrey',
    padding: 24,
    borderRadius: 16,
    elevation: 4,
  },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    color:'#000',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
