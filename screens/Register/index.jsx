 import { View, Text,TouchableOpacity,Image,TextInput,setRememberMe,rememberMe,navigateToRegister,Button,value} from "react-native";
 import React from "react";
 import { SafeAreaView } from "react-native-safe-area-context";
 import logo from "../../assets/logo.png";

 const Register = ({ navigation }) => {
  //Navigate to next screen
   const navigateToNextScreen = () => {
    //navigate to face verify screen
     navigation.navigate("FaceVerify")
   };   
   return (   
    <SafeAreaView style={{ flex: 1,
                  alignItems: "center",}}>
                {/* Image */}
                <View style={{ width: 300,
                height: 110,
                marginTop: -120,
                flexDirection: "row",
                }}>
                </View>
                {/* Login Form */}
                <Text>𝐂𝐑𝐄𝐀𝐓𝐄 𝐀𝐂𝐂𝐎𝐔𝐍𝐓</Text>
                <TouchableOpacity
            style={{
               backgroundColor: "#437456",
               borderWidth: 1,
               borderColor: "#06C09F",
               borderRadius: 10,
               width: "100%", 
              alignSelf: "",
              display: "flex",
              flexDirection: "col",
              gap: 10,
              width: "100%",
              justifyContent: "center",
              gap:10,
              alignItems: "center", 
              width:115,
              marginVertical: 0,
              flexDirection: "row",
              justifyContent: "space-around",
             
           }
            }
            
             onPress={navigateToNextScreen}
  >
            <Text style={{ color: "white", padding: 10, textAlign: "left" }}>
                  Amo
            </Text>
            
           </TouchableOpacity>
           <TouchableOpacity 
           style={{
            backgroundColor:"#437456",
            borderWidth: 1,
            borderColor: "#06C09F",
            borderRadius: 10,
            width: "100%", 
           alignSelf: "",
           display: "flex",
           flexDirection: "col",
           gap: 10,
           width: "100%",
           justifyContent: "center",
           gap:10,
           alignItems: "center", 
           width:115,
           marginVertical: 10 ,
           flexDirection: "row",
           justifyContent: "space-around",
                       
           }}
          onPress={navigateToNextScreen}>
                 <Text style={{ color: "white", padding: 10, textAlign: "left" }}>
           Empleyado
     </Text>
          </TouchableOpacity>
                

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
                
                    <View style={{
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left", 
              }}>
                <TextInput
                placeholder="First Name "
                 style={{ padding: 10 }}
               // always set text to smallcase
                autoCapitalize="none"
                   />
                </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left",
                
              }}>
                <TextInput
                placeholder="Last Name "
                 style={{ padding: 10 }}
               // always set text to smallcase
                autoCapitalize="none"
                   />
                </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left",
                
              }}>
                <TextInput
                placeholder="Address"
                 style={{ padding: 10 }}
               // always set text to smallcase
                autoCapitalize="none"
                   />
                </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left",
                
              }}>
                <TextInput
                placeholder="Email Address"
                 style={{ padding: 10 }}
               // always set Email to smallcase
                autoCapitalize="none"
                   />
                </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left",
                
              }}>
                <TextInput
                placeholder=" Enter phone number"
                style={{padding:10}}
               // always set phone number type: tel, max 12 digits
                autoCapitalize="none"
                   />
                </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left",
                
              }}>
                <TextInput
                placeholder="Date of Birth"
                 style={{ padding: 10 }}
               // always set Date type
                autoCapitalize="none"
                   />
                </View>
                    <View style={ {
                borderWidth: 1,
                width: 230,
                borderRadius: 10,
                alignItems: "left",
                
              }}>
                <TextInput
                placeholder="Skills Offered"
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
                width: "80%",
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
            <View style={ {
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                            gap: 10,
             }}>
           
            <TouchableOpacity
            style={{
               backgroundColor: "#437456",
               borderWidth: 1,
               borderColor: "#06C09F",
               borderRadius: 10,
               width: "100%", 
              alignSelf: "center",
              display: "flex",
              flexDirection: "col",
              gap: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center", 
             
           }
            }
             onPress={navigateToNextScreen}
  >
            <Text style={{ color: "white", padding: 10, textAlign: "center" }}>
                  Next
            </Text>
           </TouchableOpacity>
          </View>          
          </View>
        </View> 
      </View>
         </View>
    </SafeAreaView>  
  );
  };
 export default Register;
 

 
 


































































