import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  )
}