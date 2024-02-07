import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Platform,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

const Register = ({ navigation }) => {
  //Navigate to next screen
  const navigateToNextScreen = () => {
    //navigate to face verify screen
    navigation.navigate("FaceVerify");
  };
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [formReady, setFormReady] = useState(false);

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false); //datepicker
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

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChangeDate,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

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

      <Text
        style={{
          fontFamily: "RobotoSlab_400Regular",
          fontSize: 18,
          textAlign: "center",
          margin: 20,
        }}
      >
        Create an Account
      </Text>
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
              // alignItems: "left",
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
              padding: 9,
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
            }}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{ padding: 10 }}
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
