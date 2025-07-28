import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
 

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello Stickersmash app! ReactNative & ExpoG</Text>
      
      
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
