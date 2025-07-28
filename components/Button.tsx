import { StyleSheet, Text, View, Pressable } from 'react-native'

type Props = {
    label: string;
}

export default function Button({ label }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
      onPress={() => console.log('Button Pressed')}
       style={styles.button}>
        <Text style={styles.buttonLabel}>Click Me</Text>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
       width: 320,
       height: 68,
       marginHorizontal: 20,
       alignItems: "center",
       justifyContent: "center",
       padding: 3,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonLabel: {
         
    }
})