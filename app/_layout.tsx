import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true); // Ignore all log notifications

export default function RootLayout() {
   return (
     <Stack>
       <Stack.Screen name="(tabs)"
       options={{
       headerShown: false, // Hide the default header
       }} />
       
        <Stack.Screen name="not-found" options={{ title: "Not Found" }} />
        {/* Add more screens as needed */}
     </Stack>
   );
}
