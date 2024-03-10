import { Text, StatusBar } from "react-native";
import { RecoilRoot } from "recoil";
import "react-native-gesture-handler";

//screens
import HomeScreen from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PrivacyPolicy from "./screens/Policies/PrivacyPolicy";
import TermsOfService from "./screens/Policies/TermsOfService";
import FaceVerify from "./screens/Register/FaceVerify";
import FileUploadCapture from "./screens/Register/FileUploadCapture";
import RateGenerator from "./screens/Register/RateGenerator";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//fonts
import { useFonts } from "expo-font";
import {
  QuattrocentoSans_400Regular,
  QuattrocentoSans_700Bold,
} from "@expo-google-fonts/quattrocento-sans";
import {
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";
import {
  Yantramanav_400Regular,
  Yantramanav_700Bold,
} from "@expo-google-fonts/yantramanav";

//Load Fonts function
export const LoadFonts = () => {
  const [fontsLoaded] = useFonts({
    QuattrocentoSans_400Regular,
    QuattrocentoSans_700Bold,
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    Yantramanav_400Regular,
    Yantramanav_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading....</Text>;
  }
  return null;
};

/*
Since the app's theme is light, we can set the status bar to dark-content for now,
If you want to add a dark mode later, you can use the useColorScheme hook to determine the theme and set the status bar accordingly.
*/ 

StatusBar.setBarStyle("dark-content", true);


//Navigation function
export const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="TermsOfService"
        component={TermsOfService}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FaceVerify"
        component={FaceVerify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FileUploadCapture"
        component={FileUploadCapture}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RateGenerator"
        component={RateGenerator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <RecoilRoot>
      <LoadFonts />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </RecoilRoot>
  );
}
