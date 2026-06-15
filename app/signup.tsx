import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    alert('Account created successfully!');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Register your student profile</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Full Name" 
        value={name}
        onChangeText={setName}
      />

      <TextInput 
        style={styles.input} 
        placeholder="Registration Number (e.g., BIT/2026/000)" 
        value={regNo}
        onChangeText={setRegNo}
        autoCapitalize="characters"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 24 },
  input: { height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 16, marginBottom: 16, backgroundColor: '#f9f9f9' },
  button: { height: 50, backgroundColor: '#34C759', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 8, marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  linkText: { color: '#007AFF', textAlign: 'center', fontSize: 14 }
});