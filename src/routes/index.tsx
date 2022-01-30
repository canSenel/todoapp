import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home";
import ListScreen from "./todolist";
import ListItemDetailScreen from "./todolistdetail";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialParams={{ text: "test" }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        initialParams={{ text: "test" }}
        name="ListScreen"
        component={ListScreen}
      ></Stack.Screen>
      <Stack.Screen
        initialParams={{ text: "test" }}
        name="ListItemDetailScreen"
        component={ListItemDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
