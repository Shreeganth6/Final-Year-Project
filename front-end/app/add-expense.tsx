import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddExpense() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense 💸</Text>
      
      <View style={styles.amountContainer}>
        <Text style={styles.currency}>₹</Text>
        <TextInput 
          style={styles.amountInput} 
          placeholder="0.00" 
          keyboardType="decimal-pad" 
          autoFocus
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.categoryRow}>
          {['🍴 Food', '🚕 Travel', '🏨 Stay', '🛍️ Shop'].map((cat) => (
            <TouchableOpacity key={cat} style={styles.catChip}>
              <Text>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} placeholder="Dinner at the beach" />

        <TouchableOpacity style={styles.aiBtn}>
          <Text style={styles.aiBtnText}>✨ Scan Receipt (AI)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveBtn} onPress={() => router.back()}>
          <Text style={styles.saveBtnText}>Save Expense</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  amountContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  currency: { fontSize: 40, fontWeight: 'bold', color: '#2D6A4F' },
  amountInput: { fontSize: 50, fontWeight: 'bold', color: '#333', marginLeft: 10 },
  form: { padding: 20 },
  label: { fontSize: 14, color: '#888', marginBottom: 10, textTransform: 'uppercase' },
  categoryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  catChip: { padding: 12, backgroundColor: '#F0F4F8', borderRadius: 20 },
  input: { borderBottomWidth: 1, borderBottomColor: '#EEE', paddingVertical: 10, fontSize: 16, marginBottom: 30 },
  aiBtn: { backgroundColor: '#E9F5EE', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#2D6A4F' },
  aiBtnText: { color: '#2D6A4F', textAlign: 'center', fontWeight: 'bold' },
  saveBtn: { backgroundColor: '#2D6A4F', padding: 18, borderRadius: 12 },
  saveBtnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});