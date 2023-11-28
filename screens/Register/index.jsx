 import { View, Text, TouchableOpacity,Image,TextInput,setRememberMe,rememberMe,navigateToRegister} from "react-native";
 import React from "react";
 import { SafeAreaView } from "react-native-safe-area-context";
 import logo from "../../assets/logo.png";


 const Register = ({ navigation }) => {
  //Navigate to next screen
   const navigateToNextScreen = () => {
    //navigate to face verify screen
     navigation.navigate("FaceVerify");
   };   
   return (   
    <SafeAreaView style={{ flex: 1,
                  backgroundColor: "white",
                  alignItems: "center",}}>
                {/* Image */}
                <View style={{ width: 300,
                height: 300,
                marginTop: 10,
                }}>
                  <Image source={logo} style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }} />
                </View>

                {/* Login Form */}
                <View style={{width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 10,}}>
                  <View style={{
                display: "flex",
                flexDirection: "col",
                gap: 10,
                width: "100%",
                justifyContent: "center",
                alignItems: "center", 
              
              }}>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
              }}>
                      <TextInput
                        placeholder="Username"
                        style={{ padding: 10 }}
                        // always set text to smallcase
                        autoCapitalize="none"
                      />
                    </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
              }}>
                      <TextInput
                        placeholder="Email"
                        secureTextEntry
                        style={{ padding: 10 }}
                        autoCapitalize="none"
                      />
                    </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
              }}>
                      <TextInput
                        placeholder="Password"
                        secureTextEntry
                        style={{ padding: 10 }}
                        autoCapitalize="none"
                      />
                    </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
              }}>
                      <TextInput
                        placeholder="Re-type Password"
                        secureTextEntry
                        style={{ padding: 10 }}
                        autoCapitalize="none"
                      />
                    </View>
                  </View>
                  {/*Password did not match*/}
                  <View style={{ marginVertical: 10 }}>
                    <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
              }}>
                      <View style={ {
                display: "flex",
                flexDirection: "center",
                justifyContent: "center",
                alignItems: "center",
                Text:"center",
              
              }}>                  
          </View>
          <View>
            <Text>Password did not match</Text>
          </View>
        </View> 
      </View>
    </View>
  </SafeAreaView>
        
  );
  };

 export default Register;
