import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FileUploadCapture = () => {
  return (
    <View style={styles.container}>
      <Text>Upload Documents</Text>
      
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
