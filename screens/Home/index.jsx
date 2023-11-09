import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#06C09F", "#1EB52D", "#06C07D"]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 650,
              height: 650,
              borderRadius: 700 / 2,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <Text style={{ fontSize: 24 }}>KATIWALA</Text>
            {/* Add a loading Bar */}
            <Text
              style={{
                fontSize: 24,
                borderWidth: 1,
                width: "50%",
                borderRadius: 10,
                textAlign: "center",
              }}
            >
              70%
            </Text>
            <Pressable>
              <Text>BUtton</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
