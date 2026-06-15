import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { mockStudent } from './database'; // Import our isolated data source

export default function DashboardScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Back,</Text>
        <Text style={styles.studentName}>{mockStudent.name}</Text>
        <Text style={styles.studentMeta}>{mockStudent.regNo} | {mockStudent.campus}</Text>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Current Enrollment</Text>
        <Text style={styles.infoBody}>{mockStudent.course}</Text>
        <Text style={styles.infoSub}>{mockStudent.yearOfStudy}</Text>
      </View>

      {/* Grid Dashboard Menu */}
      <Text style={styles.menuLabel}>Student Portal Services</Text>
      <View style={styles.grid}>
        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/api-consumer')}>
          <Text style={styles.cardEmoji}>📢</Text>
          <Text style={styles.cardTitle}>Live Notices (API)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardEmoji}>💳</Text>
          <Text style={styles.cardTitle}>Fees Ledger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardEmoji}>📝</Text>
          <Text style={styles.cardTitle}>Exam Results</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardEmoji}>📅</Text>
          <Text style={styles.cardTitle}>Class Timetable</Text>
        </TouchableOpacity>

      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f9' },
  contentContainer: { padding: 20, paddingBottom: 40 },
  header: { marginTop: 24, marginBottom: 20 },
  welcomeText: { fontSize: 16, color: '#666' },
  studentName: { fontSize: 26, fontWeight: 'bold', color: '#111' },
  studentMeta: { fontSize: 14, color: '#888', marginTop: 4 },
  
  // Large Info Card
  infoCard: { backgroundColor: '#007AFF', padding: 20, borderRadius: 12, marginBottom: 24, elevation: 3 },
  infoTitle: { color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' },
  infoBody: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 6 },
  infoSub: { color: 'rgba(255,255,255,0.9)', fontSize: 13, marginTop: 4 },

  menuLabel: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  
  // Flexbox Grid System Setup
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  card: { 
    backgroundColor: '#fff', 
    width: '48%', // Ensures 2 columns with a small gap in between
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 16, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Soft shadow for Android
    shadowColor: '#000', // Shadows for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  cardEmoji: { fontSize: 28, marginBottom: 8 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#333', textAlign: 'center' },
  
  logoutButton: { marginTop: 20, height: 50, backgroundColor: '#FF3B30', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});