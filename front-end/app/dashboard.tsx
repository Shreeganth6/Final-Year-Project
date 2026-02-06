import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router'; // 1. Import the router

const EXPENSES = [
  { id: '1', title: 'Dinner in Goa', amount: '₹850', category: '🍴 Food' },
  { id: '2', title: 'Flight to Delhi', amount: '₹4,500', category: '✈️ Travel' },
  { id: '3', title: 'Hotel Booking', amount: '₹2,200', category: '🏨 Stay' },
];

export default function Dashboard() {
  const router = useRouter(); // 2. Initialize the router

  return (
    <View style={styles.container}>
      {/* Header & Balance Section */}
      <View style={styles.header}>
        <Text style={styles.welcome}>My Trips ✈️</Text>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Spent (Current Trip)</Text>
          <Text style={styles.balanceAmount}>₹ 7550</Text>
          <View style={styles.row}>
             <Text style={styles.subBalance}>Budget: ₹ 20,000</Text>
             <Text style={styles.subBalance}>Remaining: ₹ 12,450</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actions}>
        <TouchableOpacity 
          style={styles.actionBtn} 
          onPress={() => router.push('./create-trip')} // 3. Navigate to Create Trip
        >
          <Text style={styles.actionBtnText}>+ Create New Trip</Text>
        </TouchableOpacity>
      </View>

      {/* Expenses List */}
      <View style={styles.expenseSection}>
        <Text style={styles.sectionTitle}>Recent Expenses</Text>
        <FlatList 
          data={EXPENSES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.expenseItem}>
              <View>
                <Text style={styles.expTitle}>{item.title}</Text>
                <Text style={styles.expCat}>{item.category}</Text>
              </View>
              <Text style={styles.expAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => router.push('./add-expense')} // 4. Navigate to Add Expense
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#2D6A4F', padding: 25, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 60 },
  welcome: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  balanceCard: { backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 4 },
  balanceLabel: { color: '#666', fontSize: 14 },
  balanceAmount: { fontSize: 28, fontWeight: 'bold', color: '#2D6A4F', marginVertical: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 10 },
  subBalance: { fontSize: 12, color: '#888' },
  actions: { padding: 20 },
  actionBtn: { backgroundColor: '#E9F5EE', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#2D6A4F', borderStyle: 'dashed' },
  actionBtnText: { color: '#2D6A4F', textAlign: 'center', fontWeight: 'bold' },
  expenseSection: { flex: 1, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  expenseItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#F9FAFB', borderRadius: 12, marginBottom: 10 },
  expTitle: { fontSize: 16, fontWeight: '600' },
  expCat: { fontSize: 12, color: '#777' },
  expAmount: { fontSize: 16, fontWeight: 'bold', color: '#E63946' },
  fab: { position: 'absolute', right: 20, bottom: 30, width: 60, height: 60, borderRadius: 30, backgroundColor: '#2D6A4F', justifyContent: 'center', alignItems: 'center', elevation: 5 },
  fabText: { color: '#fff', fontSize: 30, fontWeight: '300' }
});