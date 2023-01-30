import { create } from "zustand";

const useStore = create((set) => ({
  // Camera rotations
  camRotateRightRequired: false,
  camRotateLeftRequired: false,
  rotateCamRight: () => set({ camRotateRightRequired: true }),
  rotateCamLeft: () => set({ camRotateLeftRequired: true }),
  resetCamRotate: () =>
    set({ camRotateRightRequired: false, camRotateLeftRequired: false }),

  // Modals
  aboutModalVisible: false,
  showAboutModal: (show) => set({ aboutModalVisible: show }),
}));

export default useStore;
