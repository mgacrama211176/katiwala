import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import Amo1 from "../../assets/Amo1.png";
import katiwala1 from "../../assets/katiwala1.png";
  
const RoleSelection = ({navigation}) => {
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <Text
     style={{
       fontFamily: "RobotoSlab_400Regular",
       fontSize: 25,
       textAlign: "center",   
       position:"center",
       padding:20,
       margin:20,     
       justifyContent: "space-around",  
     }}
   >
     Ano ang hanap mo?
   </Text>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        
      }}
    >
      {/* Image */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
       style={{ width: 400, height: 600, alignItems: "center",}}>
        <Image source={Amo1} style={{ width: "60%", height: "40%",backgroundColor:"#437456",borderRadius:10,}} /> 
        </TouchableOpacity>     
    </View>
    <TouchableOpacity></TouchableOpacity>
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        
      }}
    >
      {/* Image */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
       style={{ width: 400, height: 600, alignItems: "center",}}>
        <Image source={katiwala1} style={{ width: "60%", height: "40%",backgroundColor:"#437456",borderRadius:10,}} /> 
        </TouchableOpacity>     
    </View>
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
       fontSize: 23,
     }}
     onPress={() => navigation.navigate("Register")}
   >
     Next
   </Text>
 </TouchableOpacity>
  </SafeAreaView>
  );
};
  
    
 
export default RoleSelection;
