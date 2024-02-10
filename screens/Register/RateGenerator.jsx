import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import EstimateCard from "../Global components/EstimateCard";

const RateGenerator = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: 30,
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          gap: 10,
          width: "90%",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "RobotoSlab_400Regular",
          }}
        >
          Estimated Rates
        </Text>
        <Text
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: 16,

            textAlign: "center",
          }}
        >
          Please be reminded that there will be a 10% service charge per service
          made.
        </Text>

        {/* Cards will be inserted here which will depend on the service selected prior */}
        <EstimateCard />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#437456",
            borderWidth: 1,
            borderColor: "transparent",
            borderRadius: 10,
            alignSelf: "center",
            width: "80%",
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              color: "white",
              padding: 10,
              textAlign: "center",
              fontFamily: "Yantramanav_700Bold",
              fontSize: 24,
              width: 300,
            }}
            // onPress={() => navigation.navigate("RateGenerator")}
          >
            Next
          </Text>
        </TouchableOpacity>
        <Text>No ROUTE YET FOR PRIVACY POLICY</Text>
      </View>
    </SafeAreaView>
  );
};

export default RateGenerator;
