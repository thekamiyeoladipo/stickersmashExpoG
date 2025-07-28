import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Welcome to the About Screen</Text>
      <link rel="stylesheet" href="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    padding: 10,
  },
});
