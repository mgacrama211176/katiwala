import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false); //datepicker
  const [errorMessage, setErrorMessage] = useState(""); //checker if the password and verify password is correct
  const [dateOfBirth, setDateOfBirth] = useState(""); //still needs to be factored in since on newUserData contains the value of DOB
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

  //Navigate to next screen
  const navigateToNextScreen = () => {
    //navigate to face verify screen
    navigation.navigate("FaceVerify");
  };

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatepicker();
        setDateOfBirth(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  };

  const onChangeUserData = (key, value) => {
    setNewUserData({ ...newUserData, [key]: value });
  };
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState(""); // Set a state for the password
  const [showPassword, setShowPassword] = useState(false); // This state will be used to toggle the password visibility as a flag / boolean
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //ES6 Arrow function
  const passwordChecker = () => {
    //checks the passwod if they are matched and return error message
    if (newUserData.password !== newUserData.verifyPassword) {
      return setErrorMessage("Password did not match");
    } else {
      newUserData.password === newUserData.verifyPassword;
      return setErrorMessage("");
    }
  };

  useEffect(() => {
    //Everytime the user types in the password, it will check if the password and verify password is matched
    passwordChecker();
  }, [newUserData]);

  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "col",
        gap: 0,
        width: "100%",
        alignItems: "center",
        padding: 0,
        margin: 0,
        justifyContent: "center",
      }}
    >
      {/*create account*/}

      <Text
        style={{
          fontFamily: "RobotoSlab_400Regular",
          fontSize: 25,
          textAlign: "center",
          position: "center",
          padding: 10,
          margin: 10,
          justifyContent: "space-around",
        }}
      >
        Create an Account
      </Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 50,
          padding: 10,
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
            padding: 10,
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
              width: "90%",
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
              width: "90%",
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
              width: "90%",
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
              width: "90%",
              borderRadius: 10,
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
              width: "90%",
              borderRadius: 10,
              // alignItems: "left",
              padding: 10,
              height: "11%",
            }}
          >
            {!showPicker && (
              <Pressable onPress={toggleDatepicker}>
                <TextInput
                  style={{ padding: 1 }}
                  placeholder="Date of Birth"
                  onChangeText={setDateOfBirth}
                  editable={false}
                  value={dateOfBirth}
                />
              </Pressable>
            )}

            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
              />
            )}
          </View>
          <View
            style={{
              borderWidth: 1,
              width: "90%",
              borderRadius: 10,
              height: "11%",
              flexDirection: "row",
            }}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{ padding: 10 }}
              autoCapitalize="none"
              onChangeText={(event) => onChangeUserData("password", event)}
              

            />
            {password !== "" && (
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={{ marginRight: 10 }}
              >
                {showPassword ? (
                  <Entypo name="eye" size={16} color="black" />
                ) : (
                  <Entypo name="eye-with-line" size={16} color="black" />
                )}
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              borderWidth: 1,
              width: "90%",
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
              width: "90%",
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
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "cal",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 230,
                  justify: "center",
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
