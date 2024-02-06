import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import checked from "../../assets/checked.png";
import unchecked from "../../assets/unchecked.png";

const FileUploadCardComponent = (data) => {
  const [uploadedData, setUploadedData] = useState("");

  const information = data.data;

  const uploadDocumentOnPress = async () => {
    let documentResult = await DocumentPicker.getDocumentAsync({});
    const { uri, name, type } = documentResult.assets[0];

    setUploadedData({
      uri: uri,
      name: name,
      type: type,
    });
  };

  return (
    <View>
      {/* Create components cards where the user can upload documents */}
      <TouchableOpacity
        onPress={uploadDocumentOnPress}
        style={{
          borderWidth: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginVertical: 5,
          marginHorizontal: 20,
          borderRadius: 10,
          backgroundColor: "#437456",
          borderColor: "#437456",
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image source={checked} style={{ width: 20, height: 20 }} />
        <Text
          style={{
            fontFamily: "Yantramanav_700Bold",
            fontSize: 22,
            color: "white",
          }}
        >
          {information.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileUploadCardComponent;
