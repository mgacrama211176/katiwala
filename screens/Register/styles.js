import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  loginFormContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },
  loginFormWrapper: {
    display: "flex",
    flexDirection: "col",
    gap: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
    alignItems: "left",
  },
  rememberForgotContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    width: "60%",
    height: 40,
    alignSelf: "center",
  },
  registerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default styles;
