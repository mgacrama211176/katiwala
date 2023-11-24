import { View, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
const Home = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     //navigate to login screen
  //     navigation.navigate("Login");
  //   }, 3000);
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <View style={{ width: 400, height: 400, }}>
          <Image source={logo} style={{ width: "100%", height: "100%" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
