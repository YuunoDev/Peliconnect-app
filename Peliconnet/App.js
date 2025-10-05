import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Linux_5.13.5_boot_message_screenshot.png/500px-Linux_5.13.5_boot_message_screenshot.png"}} 
      style={{ width: 100, height: 100 }} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
