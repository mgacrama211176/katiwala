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

import BouncyCheckbox from "react-native-bouncy-checkbox";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <View style={{ width: 300, height: 300, marginTop: 100 }}>
        <Image
          source={logo}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </View>

      {/* Login Form */}
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "col",
            gap: 10,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ borderWidth: 1, width: 230, borderRadius: 10 }}>
            <TextInput
              placeholder="Username"
              style={{ padding: 10 }}
              // always set text to smallcase
              autoCapitalize="none"
            />
          </View>
          <View style={{ borderWidth: 1, width: 230, borderRadius: 10 }}>
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
          <TouchableOpacity
            style={{
              alignItems: "center",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              justifyContent: "center",
              width: "60%",
              height: 40,
              alignSelf: "center",
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        {/* Register */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text>Not a Member?</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#437456",
              borderWidth: 1,
              borderColor: "#06C09F",
              borderRadius: 10,
              justifyContent: "center",
              width: "30%",
              height: 30,
              alignSelf: "center",
            }}
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
