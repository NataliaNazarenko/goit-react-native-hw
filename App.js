import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import PostsScreen from "./src/screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./src/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
  });

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={{ title: "Start screen" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
