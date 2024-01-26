import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Register = ({ navigation }) => {
  //Navigate to next screen
  const navigateToNextScreen = () => {
    //navigate to face verify screen
    navigation.navigate("FaceVerify");
  };
  return (
    <View>
      <Text
        style={{
          fontFamily: "QuattrocentoSans_400Regular",
        }}
      >
        Register
      </Text>

      <TouchableOpacity onPress={navigateToNextScreen}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
