import { View, Text } from "react-native";
import React from "react";
import * as DocumentPicker from "expo-document-picker";

const FileUploiadCardComponent = ({ title }) => {
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

  return (
    <View>
      {/* Create components cards where the user can upload documents */}
      <TouchableOpacity onPress={uploadDocumentOnPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
      <Text>{uploadedData.name} has been added</Text>
    </View>
  );
};

export default FileUploiadCardComponent;
