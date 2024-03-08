import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function Routes() {

  const [hasToken, setHasToken] = useState('');
  async function verifyToken() {
    const storedUsername = await AsyncStorage.getItem('token');
    const token = JSON.parse(storedUsername)?.token;
    if (token) {
      setHasToken(token)
    }
  }

  useEffect(() => {
    verifyToken();
  }, [hasToken]);

  return (
    <NavigationContainer>
      <AppRoutes />
      {/* {hasToken ? <AuthRoutes /> : <AppRoutes />} */}
    </NavigationContainer>
  )
}