import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { Touchable } from "react-native";

const FileUploadCapture = () => {
  const [uploadedData, setUploadedData] = useState(null);
  const uploadDocumentOnPress = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setUploadedData(result);
  };

  return (
    <View style={styles.container}>
      <Text>Upload Documents</Text>
      <Touchable onPress={() => uploadDocumentOnPress}>
        <Text>Upload File</Text>
      </Touchable>
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
