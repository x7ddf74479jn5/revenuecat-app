import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="p-10">
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="HomeScreen"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
