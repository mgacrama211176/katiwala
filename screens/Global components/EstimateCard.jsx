import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";

const EstimateCard = () => {
  const [rate, setRate] = useState(0); //checker if the password and verify password is correct
  const [pay, setPay] = useState({
    dailyRate: rate,
    hourlyRate: 0,
    serviceFee: 0,
    netPayment: 0,
  });

  const onChangeRate = (value) => {
    setRate(value);
  };

  useEffect(() => {
    const calculateRate = () => {
      setPay({
        dailyRate: (rate / 30).toFixed(2),
        hourlyRate: (rate / 30 / 8).toFixed(2),
        serviceFee: (rate * 0.1).toFixed(2),
        netPayment: (rate * 0.9).toFixed(2),
      });
    };

    calculateRate();
  }, [rate]);

  return (
    <View
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#437456",
        borderColor: "transparent",
      }}
    >
      <View style={{ width: "70%" }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            paddingBottom: 10,
          }}
        >
          Input rate per month as: Yaya
        </Text>
        <TextInput
          placeholder="Input your rate per month"
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "transparent",
            fontSize: 20,
            fontFamily: "Yantramanav_700Bold",
            textAlign: "center",
            color: "black",
            backgroundColor: "white",
          }}
          onChangeText={(event) => onChangeRate(event)}
          keyboardType="numeric" // Only accept numbers
        />
        <Text
          style={{ color: "white", textAlign: "center", paddingVertical: 10 }}
        >
          This is automatically calculated based on your estimated rate
        </Text>

        <View style={{ display: "flex", flexDirection: "column" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "QuattrocentoSans_700Bold",
              }}
            >
              Daily rate:
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "QuattrocentoSans_700Bold",
              }}
            >
              Php {pay.dailyRate}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "QuattrocentoSans_700Bold",
              }}
            >
              Hourly rate:
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "QuattrocentoSans_700Bold",
              }}
            >
              Php {pay.hourlyRate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EstimateCard;
