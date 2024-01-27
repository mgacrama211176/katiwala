import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchSelector from "react-native-switch-selector";

const Register = ({ navigation }) => {
  //Navigate to next screen
  const navigateToNextScreen = () => {
    //navigate to face verify screen
    navigation.navigate("FaceVerify");
  };

  const [password, setPassword] = useState(""); //checker if the password and verify password is correct
  const [verifyPassword, setVerifyPassword] = useState(""); //checker if the password and verify password is correct
  const [errorMessage, setErrorMessage] = useState(""); //checker if the password and verify password is correct

  const [newUserData, setNewUserData] = useState({
    status: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    verifyPassword: "",
  });

  const onChangeUserData = (key, value) => {
    setNewUserData({ ...newUserData, [key]: value });
    console.log(newUserData.password);
    console.log(newUserData.verifyPassword);
  };

  //ES6 Arrow function
  const passwordChecker = () => {
    //checks the passwod if they are matched and return error message
    if (newUserData.password !== newUserData.verifyPassword) {
      return setErrorMessage("Password did not match");
    } else {
      //exercise:
      //if verifyPassword is empty, return no error message
      return setErrorMessage("");
    }
  };

  useEffect(() => {
    //Everytime the user types in the password, it will check if the password and verify password is matched
    passwordChecker();
  }, [newUserData]);

  const options = [{ label: "Amo" }, { label: "Empleyado" }];
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "col",
        gap: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*create account*/}
      <View></View>
      <Text
        style={{
          fontFamily: "RobotoSlab_400Regular",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        Create an Account
      </Text>
      <SwitchSelector
        style={{ width: 230, margin: 10 }}
        options={options}
        testID="options"
        initial={0}
        buttonColor={"#437456"}
        borderRadius={10}
        boarderColor={"#06C09F"}
        backgroundColor={"white"}
      />
      {/*togglebutton*/}
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "col",
            gap: 5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              width: "90%",
              borderRadius: 10,
              alignItems: "left",
            }}
          >
            <TextInput
              placeholder="First Name "
              style={{ padding: 10 }}
              // always set text to smallcase
              autoCapitalize="none"
              onChangeText={(event) => onChangeUserData("firstName", event)}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
              alignItems: "left",
            }}
          >
            <TextInput
              placeholder="Last Name "
              style={{ padding: 10 }}
              // always set text to smallcase
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
              alignItems: "left",
            }}
          >
            <TextInput
              placeholder="Address"
              style={{ padding: 10 }}
              // always set text to smallcase
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
              alignItems: "left",
            }}
          >
            <TextInput
              placeholder="Email Address"
              style={{ padding: 10 }}
              // always set Email to smallcase
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
              alignItems: "left",
            }}
          >
            {/* Restrict to only take numeric */}
            <TextInput
              placeholder="11 Digit Phone Number"
              style={{ padding: 10 }}
              // always set phone number type: tel, max 12 digits
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={11}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
              alignItems: "left",
            }}
          >
            <TextInput
              placeholder="Date of Birth"
              style={{ padding: 10 }}
              // always set Date type
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
            }}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{ padding: 10 }}
              autoCapitalize="none"
              onChangeText={(event) => onChangeUserData("password", event)}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 230,
              borderRadius: 10,
            }}
          >
            <TextInput
              placeholder="Re-type Password"
              secureTextEntry
              style={{ padding: 10 }}
              autoCapitalize="none"
              onChangeText={(event) =>
                onChangeUserData("verifyPassword", event)
              }
            />
          </View>
        </View>
        {/*Password did not match*/}
        <View style={{ marginVertical: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "87%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
                alignItems: "center",
                Text: "center",
              }}
            ></View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "red",
                  fontFamily: "Yantramanav_400Regular",
                  fontSize: 18,
                }}
              >
                {errorMessage}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#437456",
                  borderWidth: 1,
                  borderColor: "#06C09F",
                  borderRadius: 10,
                  width: "100%",
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "col",
                  gap: 10,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 230,
                }}
                onPress={navigateToNextScreen}
              >
                <Text
                  style={{ color: "white", padding: 10, textAlign: "center" }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Register;
