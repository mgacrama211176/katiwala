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
              placeholder="Username"
              style={{ padding: 10 }}
              // always set text to smallcase
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{ padding: 10 }}
              autoCapitalize="none"
            />
          </View>
        </View>
        {/* Remember Me and Forgot Password */}
        <View style={{ marginVertical: 10 }}>
          <View style={styles.rememberForgotContainer}>
            <View style={styles.checkBoxContainer}>
              <BouncyCheckbox
                fillColor="#12B981"
                value={rememberMe}
                onValueChange={setRememberMe}
              />
              <Text>Remember Me</Text>
            </View>
            <View>
              <Text>Forgot Password?</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        {/* Register */}
        <View style={styles.registerContainer}>
          <Text>Not a Member?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={navigateToRegister}
          >
            <Text style={{ color: "white", padding: 5, textAlign: "center" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
