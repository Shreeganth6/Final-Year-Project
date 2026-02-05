import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}> </Text>
        <Text style={styles.title}>Travel Expense Tracker</Text>
        <Text style={styles.subtitle}>Manage your trips with AI insights</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Email Address" 
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={() => router.push('/dashboard')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4F8', justifyContent: 'center', alignItems: 'center' },
  card: { width: '85%', backgroundColor: '#fff', padding: 30, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
  logo: { fontSize: 32, textAlign: 'center', marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 25 },
  input: { backgroundColor: '#F9FAFB', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#E5E7EB' },
  button: { backgroundColor: '#2D6A4F', padding: 16, borderRadius: 10, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }
});