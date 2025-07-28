import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";


LogBox.ignoreAllLogs(true); // Ignore all log notifications

export default function RootLayout() {
   return (
    <>
    <StatusBar style="light" />
     <Stack>
       <Stack.Screen name="(tabs)"
       options={{
       headerShown: false, // Hide the default header
       }} />
       
        <Stack.Screen name="not-found" options={{ title: "Not Found" }} />
        {/* Add more screens as needed */}
     </Stack>
    </>
   );
}
