import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo } from "@expo/vector-icons";

//styles
import styles from "./styles";

//global component
import { SecondaryButtonBGWhite } from "../Global components/GlobalButtons";

const Register = ({ navigation }) => {
  // const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

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

  const onChangeUserData = (key, value) => {
    if (key === "dateOfBirth" && value.type === "set") {
      const convertedDate = new Date(
        value.nativeEvent.timestamp
      ).toDateString();
      setNewUserData({
        ...newUserData,
        [key]: convertedDate, // store Date object directly
      });
      setShowPicker(false);
    } else {
      setNewUserData({ ...newUserData, [key]: value });
    }
  };

  const passwordChecker = () => {
    //checks the password if they are matched and return error message
    if (newUserData.password !== newUserData.verifyPassword) {
      if (newUserData.verifyPassword === "" || newUserData.password === "") {
        setErrorMessage("");
      } else {
        setErrorMessage("Password did not match");
      }
    } else {
      setErrorMessage("");
    }
  };

  useEffect(() => {
    passwordChecker();
  }, [newUserData]);

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "RobotoSlab_400Regular",
              fontSize: 25,
              textAlign: "center",
              padding: 10,
              margin: 10,
              justifyContent: "space-around",
            }}
          >
            Create an Account
          </Text>
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
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="First Name "
                style={{ padding: 10 }}
                // always set text to smallcase
                autoCapitalize="none"
                onChangeText={(event) => onChangeUserData("firstName", event)}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Last Name "
                style={{ padding: 10 }}
                // always set text to smallcase
                autoCapitalize="none"
                onChangeText={(event) => onChangeUserData("lastName", event)}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Address"
                style={{ padding: 10 }}
                // always set text to smallcase
                autoCapitalize="none"
                onChangeText={(event) => onChangeUserData("address", event)}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Email Address"
                style={{ padding: 10 }}
                // always set Email to smallcase
                autoCapitalize="none"
                onChangeText={(event) => onChangeUserData("email", event)}
              />
            </View>
            <View style={styles.inputStyle}>
              {/* Restrict to only take numeric */}
              <TextInput
                placeholder="11 Digit Phone Number"
                style={{ padding: 10 }}
                // always set phone number type: tel, max 12 digits
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={11}
                onChangeText={(event) => onChangeUserData("phoneNumber", event)}
              />
            </View>

            <View style={[styles.inputStyle, { height: 50 }]}>
              {!showPicker && (
                <Pressable onPress={() => setShowPicker(!showPicker)}>
                  <Text style={{ padding: 14, color: "gray" }} editable={false}>
                    {newUserData.dateOfBirth === ""
                      ? "Date of Birth"
                      : newUserData.dateOfBirth}
                  </Text>
                </Pressable>
              )}

              {showPicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={new Date() || newUserData.dateOfBirth}
                  onChange={(selectedDate) => {
                    onChangeUserData("dateOfBirth", selectedDate);
                  }}
                  style={{ width: "100%" }}
                />
              )}
            </View>

            <View
              style={{
                borderWidth: 1,
                width: "90%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                style={{ padding: 10 }}
                autoCapitalize="none"
                onChangeText={(event) => onChangeUserData("password", event)}
              />
              {newUserData.password !== "" && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="Re-type Password"
                secureTextEntry={!showVerifyPassword}
                style={{ padding: 10 }}
                autoCapitalize="none"
                onChangeText={(event) =>
                  onChangeUserData("verifyPassword", event)
                }
              />
              {newUserData.verifyPassword !== "" && (
                <TouchableOpacity
                  onPress={() => setShowVerifyPassword(!showVerifyPassword)}
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
          </View>
        </View>
        {/*Password did not match*/}
        <View style={{ marginVertical: 10 }}>
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

          <View style={{ marginVertical: 10 }}>
            <SecondaryButtonBGWhite
              Label={"Next"}
              onPress={navigateToNextScreen}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
