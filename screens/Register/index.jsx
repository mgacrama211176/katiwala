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

//atom
import { newUserAtom } from "../../recoil/NewUserAtom";
import { useRecoilState } from "recoil";

// Terms of Service Modal
import TermsOfService from "../Policies/TermsOfService";
// Privacy Policy Modal
import PrivacyPolicy from "../Policies/PrivacyPolicy";
//utils
import { debounce } from "../../utils/debounce";

const Register = ({ navigation }) => {
  // const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(true);

  const [newUserData, setNewUserData] = useRecoilState(newUserAtom);

  //Navigate to next screen
  const navigateToNextScreen = () => {
    // Before submitting the form, check if all the fields are filled
    const requiredFields = [
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "dateOfBirth",
      "password",
      "verifyPassword",
    ];
    const isAnyFieldEmpty = requiredFields.some(
      (field) => newUserData[field] === ""
    );
    if (isAnyFieldEmpty) {
      setErrorMessage("Some fields are empty");
      return;
    }

    //navigate to face verify screen
    navigation.navigate("FaceVerify");
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate || new Date();

      //selected date and current date must not be below 18 years old
      const currentYear = new Date().getFullYear();
      const selectedYear = currentDate.getFullYear();
      let age = currentYear - selectedYear;

      setShowPicker(false);
      if (age < 18) {
        setErrorMessage("You must be 18 years old and above");
        alert("You must be 18 years old and above");
        return;
      } else {
        onChangeUserData("dateOfBirth", currentDate.toDateString());
      }
    }
  };

  const onChangeUserData = (key, value) => {
    if (key === "phoneNumber") {
      //need to apply debounce here
      const debounced = debounce(() => {
        setNewUserData({ ...newUserData, [key]: value });
      }, 2000);
      debounced();
    }
    if (key === "dateOfBirth") {
      setNewUserData({
        ...newUserData,
        [key]: value, // store Date object directly
      });
      return setShowPicker(false);
    }

    return setNewUserData({ ...newUserData, [key]: value });
  };

  console.log(newUserData);

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

  const closeTermsOfServiceModal = () => {
    setShowTermsOfService(false);
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
        <TermsOfService
          isVisible={showTermsOfService}
          onClose={closeTermsOfServiceModal}
        />

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
                placeholder="Complete Address"
                style={{ padding: 10 }}
                // always set text to smallcase
                autoCapitalize="none"
                onChangeText={(event) => onChangeUserData("address", event)}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Email Address (optional)"
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
                  onChange={handleDateChange}
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
                style={{ padding: 10, width: "90%" }}
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
                style={{ padding: 10, width: "90%" }}
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
