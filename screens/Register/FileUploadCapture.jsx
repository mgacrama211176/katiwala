import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import uploadImage from "../../assets/uploadImage.png";

//styles
import styles from "./styles";

//components
import FileUploadCardComponent from "../Global components/FileUploadCardComponent";

const FileUploadCapture = () => {
  const [uploadedData, setUploadedData] = useState("");

  const uploadDocumentOnPress = async () => {
    let documentResult = await DocumentPicker.getDocumentAsync({});
    const { uri, name, type } = documentResult.assets[0];

    setUploadedData({
      uri: uri,
      name: name,
      type: type,
    });
  };

  //Heading
  const Requirements = [
    {
      title: "Biodata or Resume",
    },
    {
      title: "Barangay Clearance",
    },
    {
      title: "Police Clearance",
    },
    {
      title: "Any Government ID",
    },
  ];

  return (
    <View
      style={{
        display: "flex",
        paddingHorizontal: 20,
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 10,
            fontFamily: "RobotoSlab_400Regular",
          }}
        >
          Upload Documents
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontFamily: "Yantramanav_700Bold",
            marginBottom: 20,
          }}
        >
          Upload Documents for validation
        </Text>

        {/* Create components cards where the user can upload documents */}
        {Requirements.map((item, index) => {
          return <FileUploadCardComponent data={item} key={index} />;
        })}

        <View
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Yantramanav_700Bold",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Skill Supporting Images
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Yantramanav_700Bold",
              fontSize: 16,
              color: "gray",
            }}
          >
            Upload atleast 1 supporting Image
          </Text>
        </View>

        {/* Create components cards where the user can upload documents */}
        <TouchableOpacity
          onPress={uploadDocumentOnPress}
          style={{
            backgroundColor: "#437456",
            borderWidth: 2,
            borderStyle: "dashed",
            borderColor: "#437456",
            borderRadius: 10,
            padding: 20,
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            width: 200,
            alignSelf: "center",
          }}
        >
          <Image source={uploadImage} style={{ width: 100, height: 100 }} />
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
            fontSize: 24,
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileUploadCapture;
