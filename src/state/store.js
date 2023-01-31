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

  // Scene animations
  animateSceneDown: false,
  animateSceneUp: false,
  moveSceneDown: () => set({ animateSceneDown: true }),
  moveSceneUp: () => set({ animateSceneDown: false, animateSceneUp: true }),
  resetSceneAnimation: () =>
    set({ animateSceneDown: false, animateSceneUp: false }),
}));

export default useStore;
