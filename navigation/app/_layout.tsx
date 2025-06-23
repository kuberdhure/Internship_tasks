import { Stack } from "expo-router";
import MainNavigator from "./navigation/MainNavigator";

export default function RootLayout() {
  return  <Stack screenOptions={{headerShown:false}}/>;
}
