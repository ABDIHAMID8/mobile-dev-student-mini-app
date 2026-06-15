import { Redirect } from 'expo-router';

export default function Index() {
  // This instantly shoots the user to the login screen upon startup
  return <Redirect href="/login" />;
}