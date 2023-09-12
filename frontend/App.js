import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const onPress = () => { console.log('a') };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circleShape} onPress={onPress}>
        <Text>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  circleShape: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    position: 'absolute',
    right: -30,
    bottom: -30,
  }
});
