import { View,  SafeAreaView, Image } from "react-native";
import React from "react";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      
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
          >  {/* Image */}
          <View >
            <Image source={logo} style={{width:"50%",height:"50%"}} />
          </View>
          
       
             
            
              
           
           
             
            
          </View>
        </View>
      
    </SafeAreaView>
  );
};

export default Home;
