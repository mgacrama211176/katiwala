import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import checked from "../../assets/checked.png";
import unchecked from "../../assets/unchecked.png";

const FileUploadCardComponent = ({ data, setDocuments }) => {
  const uploadDocumentOnPress = async () => {
    let documentResult = await DocumentPicker.getDocumentAsync({});

    const { uri, name, mimeType } = documentResult.assets[0];

    setDocuments((prev) => {
      return prev.map((doc) => {
        if (doc.title === data.title) {
          return {
            ...doc,
            uri: uri,
            name: name,
            mimeType: mimeType,
          };
        }
        return doc;
      });
    });
  };

  console.log(data);

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
        {data.uri === "" ? (
          <Image source={unchecked} style={{ width: 20, height: 20 }} />
        ) : (
          <Image source={checked} style={{ width: 20, height: 20 }} />
        )}

        <Text
          style={{
            fontFamily: "Yantramanav_700Bold",
            fontSize: 22,
            color: "white",
          }}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileUploadCardComponent;
