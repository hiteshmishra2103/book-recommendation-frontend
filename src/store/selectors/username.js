import { selector } from "recoil";
import { userState } from "../atoms/user";

export const usernameState = selector({
  key: "usernameState",
  get: ({ get }) => {
    const user = get(userState);
    return user?.user;
  },
});
