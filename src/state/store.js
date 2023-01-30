import { create } from "zustand";

const useStore = create((set) => ({
  camRotateRightRequired: false,
  camRotateLeftRequired: false,
  rotateCamRight: () => set({ camRotateRightRequired: true }),
  rotateCamLeft: () => set({ camRotateLeftRequired: true }),
  resetCamRotate: () =>
    set({ camRotateRightRequired: false, camRotateLeftRequired: false }),
}));

export default useStore;
