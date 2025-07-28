import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
   return (
     <Tabs
     screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
            backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: {
            backgroundColor: "#25292e",
            borderTopColor: "transparent",
            height: 60,
        },
     }}>


       <Tabs.Screen name="index" 
       options={{
        headerTitle: "Stickersmash App",
        headerTitleStyle: {
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
        },
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name="home" size={24} color={color} />
        ),
        headerLeft: () => <></>, // Hide the default header left button
       }} />


       <Tabs.Screen name="about"
       options={{
        headerTitle: "About",
        headerTitleStyle: {
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
        },
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name="information-circle" size={24} color={color} />
        ),
       }} />


        <Tabs.Screen name="not-found" options={{ title: "Not Found" }} />
        {/* Add more screens as needed */}
     </Tabs>
   );
}


