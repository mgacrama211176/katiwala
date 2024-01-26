import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../../globalStyles/globalStyles";

const Login = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);

  const navigateToRegister = () => {
    //navigate to register screen
    navigation.navigate("Register");
  };

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
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.textInputStyle}
              autoCapitalize="none"
            />
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
