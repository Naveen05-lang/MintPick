import React, { useState } from 'react';
import {
  TextInput, Text, StyleSheet, KeyboardAvoidingView, Platform,
  Alert, TouchableOpacity, View, SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../auth/authService';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignUp = async () => {
    setMsg('');
    if (!email.trim() || !password) {
      setMsg('Email and password are required!');
      return;
    }

    const result = await signUp(email.trim(), password);
    if (result.error) {
      setMsg(result.error);
    } else {
      Alert.alert('Success ✅', 'User created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('SignIn') },
      ]);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.form}>
          <Text style={styles.heading}>Sign Up</Text>

          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#000"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#000"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.customButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={{ color: '#1e90ff', fontWeight: 'bold' }}
            >
              Sign In
            </Text>
          </Text>

          {msg ? <Text style={styles.error}>{msg}</Text> : null}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  form: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: 'lightgrey',
    padding: 24,
    borderRadius: 16,
    elevation: 4,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    color:'#000',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  customButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 12,
    textAlign: 'center',
  },
});
