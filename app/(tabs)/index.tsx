import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import "../../global.css"
import * as ImagePicker from "expo-image-picker";



 
const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {

const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  })
}


  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Text className="text-gray-100 text-underline">Kamiye</Text>
        
      </View>

       <View>
        <Button label="Choose a Photo!" />
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
