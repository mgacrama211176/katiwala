import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
//styles
import styles from "./styles";

//components
import FileUploiadCardComponent from "../Global components/FileUploiadCardComponent";

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
      title: " Biodata or Resume",
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

  console.log(uploadedData.assets);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginVertical: 20,
          fontFamily: "RobotoSlab_400Regular",
        }}
      >
        Upload Documents
      </Text>
      <Text>Upload Documents for validation</Text>

      {/* Create components cards where the user can upload documents */}
      {Requirements.map((item, index) => {
        return <FileUploiadCardComponent data={item} key={index} />;
      })}
      <FileUploiadCardComponent data={Requirements} />

      <View>
        <Text>Skill Supporting Images</Text>
        <Text>Upload atleast 1 supporting Image</Text>
      </View>

      {/* Create components cards where the user can upload documents */}
      <TouchableOpacity onPress={uploadDocumentOnPress}>
        <Text>Upload File</Text>
      </TouchableOpacity>
      <Text>{uploadedData.name} has been added</Text>
    </View>
  );
};

export default FileUploadCapture;
