import {
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import EstimateCard from "../Global components/EstimateCard";
import { SecondaryButtonBGWhite } from "../Global components/GlobalButtons";

const RateGenerator = () => {
  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const navigateToNextScreen = () => {
    alert(
      "Welcome Katiwala! You have successfully registered. Please wait for the admin to approve your account."
    );
    //navigate to face verify screen
    // navigation.navigate("FaceVerify");
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 60,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontFamily: "RobotoSlab_400Regular" }}>
        Estimated Rates
      </Text>
      <Text
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: 16,
          width: "80%",
          textAlign: "center",
        }}
      >
        Please be reminded that there will be a 10% service charge per service
        made.
      </Text>

      {/* Cards will be inserted here which will depend on the service selected prior */}
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <EstimateCard />
      </TouchableWithoutFeedback>
      <View style={{ width: "100%", marginVertical: 40 }}>
        <SecondaryButtonBGWhite Label={"Next"} onPress={navigateToNextScreen} />
      </View>
    </SafeAreaView>
  );
};

export default RateGenerator;
