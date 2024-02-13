import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import Icon from "react-native-vector-icons/Feather";

const FaceVerify = ({ navigation }) => {
  const [permission, setPermission] = useState(null);
  const [image, setImage] = useState(null);
  const cameraReff = useRef(null);
  const [message, setMessage] = useState({
    text: "Press the camera to take a selfie",
    code: false,
  });
  const [faceDetected, setFaceDetected] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      } else {
        setPermission(status === "granted");
      }
    })();
  }, []);

  const handleFacesDetected = ({ faces }) => {
    if (faces.length > 0) {
      setFaceDetected(true);
    } else {
      setFaceDetected(false);
    }
  };

  //Camera logic. Will return the URI of the image taken
  const takeAPicture = async () => {
    if (!faceDetected) {
      setMessage({ text: "No face detected", code: false });
      return;
    }
    try {
      if (cameraReff) {
        const data = await cameraReff.current.takePictureAsync(null);
        setImage(data.uri);
        setMessage({ text: "Image captured", code: true });

        //proceed to next step
        navigation.navigate("FileUploadCapture");
      }
    } catch (err) {
      setMessage({ text: "Please take a selfie", code: false });
    }
  };

  if (permission === null) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "RobotoSlab_400Regular",
          marginVertical: 40,
        }}
      >
        Please line up your face
      </Text>
      <View style={styles.cameraWrapper}>
        <Camera
          ref={cameraReff}
          style={{ flex: 1 }}
          type={CameraType.front}
          ratio={"1:1"}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 50,
            tracking: true,
          }}
        />
      </View>
      <Text style={{ textAlign: "center", padding: 10 }}>{message.text}</Text>
      <TouchableOpacity onPress={takeAPicture} style={styles.buttonContainer}>
        <Icon name="camera" size={30} color="white" />
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Yantramanav_400Regular",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Take a Photo
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  cameraWrapper: {
    width: 400,
    height: 400,
    border: "1px solid black",
    padding: 0,
    overflow: "hidden",
    borderRadius: 500,
  },
  camera: {
    width: "100%",
    height: "100%",
    border: "1px solid black",
    position: "relative",
    display: "flex",
  },
  buttonContainer: {
    position: "relative",
    bottom: 0,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#437456",
    borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#437456",
  },
});

export default FaceVerify;
