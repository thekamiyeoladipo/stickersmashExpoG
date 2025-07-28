import { Tabs } from "expo-router";

export default function TabsLayout() {
   return (
     <Tabs>
       <Tabs.Screen name="index" 
       options={{
        headerTitle: "Stickersmash App",
        headerLeft: () => <></>, // Hide the default header left button
       }} />
       <Tabs.Screen name="about" />
        <Tabs.Screen name="not-found" options={{ title: "Not Found" }} />
        {/* Add more screens as needed */}
     </Tabs>
   );
}
