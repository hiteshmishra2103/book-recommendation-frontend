import { atom } from "recoil";

const isMountedState = atom({
  key: "isMountedState",
  default: false,
});

export default isMountedState;
