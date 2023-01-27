import { create } from "zustand";

const useStore = create((set) => ({
  rotationIntensity: 0.25,
  lightPosition: [10, 10, 10],
  cameraPosition: [0, 3, 10],
  camRightRequired: false,
  rotateCamRight: () => set({ camRightRequired: true }),
}));

export default useStore;
