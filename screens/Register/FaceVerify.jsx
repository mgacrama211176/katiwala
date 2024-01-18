import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import Icon from "react-native-vector-icons/Feather";
import { globalStyles } from "../../globalStyles/globalStyles";

const FaceVerify = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
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
      setPermission(status === "granted");
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
      }
    } catch (err) {
      setMessage({ text: "Error taking picture", code: false });
    }
  };

  //After Image capture is successful, we can navigate to the next step
  const onPressNextStep = () => {
    //if the message.code is  === true, then we can navigate to the next step
    if (!message.code) {
      setMessage({ text: "Please take a selfie", code: false });
    } else {
      navigation.navigate("FileUploadCapture");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrapper}>
        <Camera
          ref={cameraReff}
          style={styles.camera}
          type={type}
          ratio={"1:1"}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 50,
            tracking: true,
          }}
        >
          <TouchableOpacity
            onPress={takeAPicture}
            style={{
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
              padding: 10,
            }}
          >
            <Icon name="camera" size={50} color="white" />
          </TouchableOpacity>
        </Camera>
        <Text style={{ textAlign: "center", padding: 10 }}>{message.text}</Text>
        <TouchableOpacity
          style={globalStyles.greenButton}
          onPress={onPressNextStep}
        >
          <Text style={globalStyles.greenButtonText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  cameraWrapper: {
    width: "100%",
    height: "100%",
    border: "1px solid black",
    borderRadius: "100%",
    padding: 10,
  },
  camera: {
    width: "100%",
    height: "50%",
    border: "1px solid black",
    borderRadius: "100%",
    position: "relative",
    display: "flex",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
});

export default FaceVerify;
