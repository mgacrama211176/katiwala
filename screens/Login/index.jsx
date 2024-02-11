import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../../globalStyles/globalStyles";
import { Entypo } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState(""); // Set a state for the password
  const [showPassword, setShowPassword] = useState(false); // This state will be used to toggle the password visibility as a flag / boolean

  const navigateToRegister = () => {
    //navigate to register screen
    navigation.navigate("Register");
  };

  // Method to toggle the password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.imageStyle} />
      </View>

      {/* Login Form */}
      <View style={styles.loginFormContainer}>
        <View style={styles.loginFormWrapper}>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="11 Digit Phone Number"
              style={styles.textInputStyle}
              // always set text to smallcase
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={11}
            />
          </View>
          {/* I just appended styles here I didn't na to change the styling in the separate styles file */}
          <View style={[styles.inputStyle, { flexDirection: "row", alignItems: "center" }]}>
            {/* Changes made to input password */}
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={[styles.textInputStyle, { flex: 1 }]}
              autoCapitalize="none"
            />
            {/* 
                First check if the password's text input is not empty, if its empty then we don't need to show the eye icon 
                If the password's text input is not empty, then we show the toggle eye icon to show/hide the password
            */}
            {password !== "" && (
                <TouchableOpacity onPress={toggleShowPassword} style={{ marginRight: 8 }}>
                    {showPassword ? <Entypo name="eye" size={16} color="black" /> : <Entypo name="eye-with-line" size={16} color="black" />}
                </TouchableOpacity>
            )}
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "red",
            fontFamily: "Yantramanav_400Regular",
          }}
        >
          Incorrect Password
        </Text>
        {/* Remember Me and Forgot Password */}
        <View style={{ marginVertical: 10 }}>
          <View style={styles.rememberForgotContainer}>
            <View style={styles.checkBoxContainer}>
              <BouncyCheckbox
                fillColor="#12B981"
                value={rememberMe}
                onValueChange={setRememberMe}
              />
              <Text
                style={{
                  fontFamily: "QuattrocentoSans_400Regular",
                  fontSize: 14,
                }}
              >
                Remember Me
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "QuattrocentoSans_400Regular",
                  fontSize: 14,
                }}
              >
                Forgot Password?
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text
              style={{
                color: "#12B981",
                fontFamily: "Yantramanav_700Bold",
                fontSize: 18,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* Register */}
        <View style={styles.registerContainer}>
          <Text>Not a Member?</Text>
          <TouchableOpacity
            style={globalStyles.greenButton}
            onPress={navigateToRegister}
          >
            <Text style={globalStyles.greenButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
