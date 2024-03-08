import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { NewPost } from "../screens/NewPost";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: "none" }}
      initialRouteName="login"
    >
      <Screen name="login" component={Login} />
      <Screen name="signup" component={SignUp} />
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
      <Screen name="newPost" component={NewPost} />
    </Navigator>
  )
}