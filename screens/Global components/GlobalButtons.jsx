import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export const PrimaryButtonBGGreen = (props) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#437456",
        borderRadius: 10,
        justifyContent: "center",
        width: "60%",
        height: 40,
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          color: "black",
          fontFamily: "Yantramanav_700Bold",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {props.Label}
      </Text>
    </TouchableOpacity>
  );
};

export const SecondaryButtonBGWhite = (props) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#437456",
        borderRadius: 10,
        justifyContent: "center",
        width: "60%",
        height: 60,
        alignSelf: "center",
        backgroundColor: "#437456",
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "QuattrocentoSans_400Regular",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {props.Label}
      </Text>
    </TouchableOpacity>
  );
};
