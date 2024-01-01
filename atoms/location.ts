import { atom } from "recoil";

export const locationState = atom({
    key: "locationState",
    default: { latitude: 0, longitude: 0 },
  });