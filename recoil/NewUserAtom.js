import { atom } from "recoil";

export const newUserAtom = atom({
  key: "newUserAtom",
  default: {
    status: "pending",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    verifyPassword: "",
    faceImage: "",
    uploadedSkills: [],
    documents: [],
  },
});
