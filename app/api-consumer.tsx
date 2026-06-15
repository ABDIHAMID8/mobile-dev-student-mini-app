import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Define the data structure of the posts we are fetching
interface Notice {
  id: string;
  title: string;
  body: string;
  date: string;
}

const campusNotices: Notice[] = [
  {
    id: '1',
    title: 'BIT4107 Project Defense Schedule',
    body: 'All internal project presentation portals remain open. Ensure your GitHub links are updated in your logbooks before the weekend review.',
    date: 'Today',
  },
  {
    id: '2',
    title: 'Main Campus Wi-Fi Maintenance',
    body: 'The ICT department will be conducting routine maintenance on the library and lab networks this Saturday from 8:00 AM to 12:00 PM.',
    date: 'Yesterday',
  },
  {
    id: '3',
    title: 'Upcoming Internal Hackathon',
    body: 'Registration is now open for the annual software engineering challenge. Teams of 3 can register at the department office.',
    date: '2 days ago',
  },
];

export default function ApiConsumerScreen() {
  const router = useRouter();
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  // The hook that triggers the network request when the screen loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotices(campusNotices);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Bar Navigation */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backLink}>← Back to Dashboard</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Live Campus Notices</Text>
      </View>

      {/* Conditional Rendering: Show loading wheel OR the data list */}
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Fetching live server data...</Text>
        </View>
      ) : (
        <FlatList
          data={notices}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.postTitle}>📌 {item.title}</Text>
              <Text style={styles.postBody}>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f9' },
  topBar: { paddingTop: 40, paddingBottom: 16, paddingHorizontal: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee', flexDirection: 'row', alignItems: 'center' },
  backLink: { color: '#007AFF', fontSize: 14, fontWeight: '600', marginRight: 16 },
  topBarTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#666', fontSize: 14 },
  postCard: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 12, elevation: 1 },
  postTitle: { fontSize: 15, fontWeight: 'bold', color: '#111', textTransform: 'capitalize', marginBottom: 6 },
  postBody: { fontSize: 13, color: '#555', lineHeight: 18 }
});