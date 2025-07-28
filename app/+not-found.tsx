import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Link href="./">Go to home screen</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    padding: 10,
  },
  button: {
    fontSize: 20,
    color: "black",
    marginTop: 20,
    textAlign: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "80%",
    alignSelf: "center",
    shadowColor: "#000",
  }
});



