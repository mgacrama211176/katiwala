import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";

const FileUploadCapture = () => {
  const [uploadedData, setUploadedData] = useState("");

  const uploadDocumentOnPress = async () => {
    console.log(`data`);
    let documentResurl = await DocumentPicker.getDocumentAsync({});
    console.log(documentResurl);
  };

  return (
    <View style={styles.container}>
      <Text>Upload Documents</Text>
      <TouchableOpacity onPress={uploadDocumentOnPress}>
        <Text>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileUploadCapture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
