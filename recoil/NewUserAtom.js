import { atom } from "recoil";

export const newUserAtom = atom({
  key: "newUserAtom",
  default: {
    status: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    verifyPassword: "",
  },
});
