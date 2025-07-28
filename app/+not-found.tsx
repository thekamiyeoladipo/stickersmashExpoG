import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'


export default function AboutScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found!" }} />
      <View style={styles.container}>
        <link style={styles.button} href="/">
          Go back to Home
        </link>
      </View>
    </>
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
