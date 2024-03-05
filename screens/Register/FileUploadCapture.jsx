import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import uploadImage from "../../assets/uploadImage.png";

//components
import FileUploadCardComponent from "../Global components/FileUploadCardComponent";
import { SecondaryButtonBGWhite } from "../Global components/GlobalButtons";

//atom
import { newUserAtom } from "../../recoil/NewUserAtom";
import { useRecoilState } from "recoil";

const FileUploadCapture = ({ navigation }) => {
  const [uploadedSkills, setUploadedSkills] = useState([]);
  const [newUserData, setNewUserData] = useRecoilState(newUserAtom);
  const [documents, setDocuments] = useState([
    {
      title: "Biodata or Resume",
      uri: "",
      name: "",
      mimeType: "",
    },
    {
      title: "Barangay Clearance",
      uri: "",
      name: "",
      mimeType: "",
    },
    {
      title: "Police Clearance",
      uri: "",
      name: "",
      mimeType: "",
    },
    {
      title: "Any Government ID",
      uri: "",
      name: "",
      mimeType: "",
    },
  ]);

  const uploadDocumentOnPress = async () => {
    let documentResult = await DocumentPicker.getDocumentAsync({});
    const { uri, name, mimeType } = documentResult.assets[0];

    if (mimeType === "image/jpeg" || mimeType === "image/png") {
      setUploadedSkills((prev) => [
        ...prev,
        {
          uri: uri,
          name: name,
          mimeType: mimeType,
        },
      ]);
    } else {
      alert("We only accept jpeg or png files");
      return;
    }
  };

  const navigateToNextScreen = () => {
    // Before submitting the form, check if all the fields are filled
    const isAnyFieldEmpty = documents.some((doc) => doc.uri === "");
    if (isAnyFieldEmpty) {
      alert("Make sure to upload all documents");
      return;
    }
    //add all the documents to the atom
    setNewUserData({
      ...newUserData,
      documents: [documents],
      uploadedSkills: [uploadedSkills],
    });

    navigation.navigate("RateGenerator");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: "flex",
        height: "100%",
        justifyContent: "space-around",
        overflow: "scroll",
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
        {documents.map((item, index) => (
          <View key={index}>
            <FileUploadCardComponent data={item} setDocuments={setDocuments} />
          </View>
        ))}

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
            (Upload atleast 1 supporting Image for faster approval)
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

      <ScrollView
        style={{
          overflow: "scroll",
          maxHeight: 200,
        }}
      >
        <View
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {uploadedSkills.map((item, index) => (
            <Image
              source={{ uri: item.uri }}
              style={{ width: 100, height: 100 }}
              key={index}
            />
          ))}
        </View>
      </ScrollView>

      {/* <TouchableOpacity
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
          onPress={() => navigation.navigate("RateGenerator")}
        >
          Next
        </Text>
      </TouchableOpacity> */}

      <View>
        <SecondaryButtonBGWhite Label={"Next"} onPress={navigateToNextScreen} />
      </View>
    </SafeAreaView>
  );
};

export default FileUploadCapture;
