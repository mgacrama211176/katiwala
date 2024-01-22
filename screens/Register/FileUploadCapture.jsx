import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
//styles
import styles from "./styles";

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

  console.log(uploadedData.assets);

  return (
    <View style={styles.container}>
      <Text>Upload Documents</Text>
      <TouchableOpacity onPress={uploadDocumentOnPress}>
        <Text>Upload File</Text>
      </TouchableOpacity>
      <Text>{uploadedData.name} has been added</Text>
    </View>
  );
};

export default FileUploadCapture;
