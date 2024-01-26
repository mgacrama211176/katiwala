 import { View, Text,onPress,TouchableOpacity,Image,setState,TextInput,colors,setRememberMe,rememberMe,navigateToRegister,Button,Toggle,value} from "react-native";
 import React from "react";
 import { SafeAreaView } from "react-native-safe-area-context";
 import logo from "../../assets/logo.png";
 import SwitchSelector from "react-native-switch-selector";
 


 const Register = ({ navigation }) => {
  //Navigate to next screen
  const navigateToNextScreen = () => {
    //navigate to face verify screen
     navigation.navigate("FaceVerify")
     const options = [
      { label: "Amo", value: "Amo" },
      { label: "Empleyado", value: "Empeyado" },
     
     
    ];
   };   
   return (   
    <SafeAreaView style={{flex: 1,
                  alignItems: "center",}}>
                    {/*create account*/}
                <View style={{ width: 300,
                height: 110,
                marginTop: -120, 
                buttom: 120,    
                }}>
                </View>                
                  <Text>
                  𝐂𝐫𝐞𝐚𝐭𝐞 𝐚𝐧 𝐀𝐜𝐜𝐨𝐮𝐧𝐭
                  </Text>
                  <SwitchSelector
            style={{
          margin:10,
               }
            }
             options={[
              { label: "Amo", value: "Amo"},
              { label: "Empleyado", value: "Empleyado",}   
             ]}
             testID="options"
             initial={0}
             onPress={value => alert(value)}
             buttonColor={"#437456"}       
             />                 
                {/*togglebutton*/}
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
 
 

 
 


































































