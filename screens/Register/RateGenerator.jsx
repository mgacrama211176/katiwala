import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import EstimateCard from "../Global components/EstimateCard";

const RateGenerator = () => {
  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
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
        <EstimateCard />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RateGenerator;
