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
  contactModalVisible: false,
  showContactModal: (show) => set({ contactModalVisible: show }),
  servicesModalVisible: false,
  showServicesModal: (show) => set({ servicesModalVisible: show }),
  infoModalVisible: false,
  showInfoModal: (show) => set({ infoModalVisible: show }),

  // Scene animations
  animateSceneDown: false,
  animateSceneUp: false,
  activeScene: "main",
  moveSceneDown: () => set({ animateSceneDown: true }),
  moveSceneUp: () => set({ animateSceneDown: false, animateSceneUp: true }),
  resetSceneAnimation: () =>
    set({ animateSceneDown: false, animateSceneUp: false }),
  currentLevel: 0,
  setCurrentLevel: (level) => set({ currentLevel: level }),
  setActiveScene: (scene) =>
    set({ activeScene: scene, animateSceneDown: true }),
}));

export default useStore;
