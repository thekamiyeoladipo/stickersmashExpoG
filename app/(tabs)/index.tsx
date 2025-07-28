import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
 
const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
    color: "white",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: 440,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  }
});
