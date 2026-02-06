import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateTrip() {
  const router = useRouter();
  const [tripName, setTripName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Journey ✈️</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Where are you going?</Text>
        <TextInput 
          style={styles.input} 
          placeholder="e.g. Goa Trip, Europe 2026" 
          value={tripName}
          onChangeText={setTripName}
        />

        <Text style={styles.label}>Total Budget (₹)</Text>
        <TextInput 
          style={styles.input} 
          placeholder="50000" 
          keyboardType="numeric" 
        />

        <TouchableOpacity style={styles.saveBtn} onPress={() => router.push('/dashboard')}>
          <Text style={styles.saveBtnText}>Start Trip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 25, paddingTop: 60, flexDirection: 'row', alignItems: 'center' },
  backText: { fontSize: 18, color: '#2D6A4F', marginRight: 15 },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  form: { padding: 20 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#444' },
  input: { backgroundColor: '#F0F4F8', padding: 15, borderRadius: 10, marginBottom: 20 },
  saveBtn: { backgroundColor: '#2D6A4F', padding: 18, borderRadius: 12, marginTop: 10 },
  saveBtnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }
});