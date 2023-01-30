import { create } from "zustand";

const useStore = create((set) => ({
  camRotateRightRequired: false,
  camRotateLeftRequired: false,
  rotateCamRight: () => set({ camRotateRightRequired: true }),
  rotateCamLeft: () => set({ camRotateLeftRequired: true }),
}));

export default useStore;
