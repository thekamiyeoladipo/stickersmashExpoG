import { StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
    imgSource: string
}

export default function ImageViewer({ imgSource }: Props) {
  return  (
    <Image
      source={imgSource} // Replace with your image URL or local asset
      style={styles.image}
      contentFit="cover"
    />
  )
};

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})