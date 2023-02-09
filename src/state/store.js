import { create } from "zustand";

const useStore = create((set) => ({
  // Camera rotations
  activeIsland: 0,
  numIslands: 4,
  setActiveIsland: (island) => set({ activeIsland: island }),
  setNumIslands: (islands) => set({ numIslands: islands }),
  camRotateRightRequired: false,
  camRotateLeftRequired: false,
  rotateCamRight: () => {
    set((state) => ({
      camRotateRightRequired: true,
      activeIsland:
        state.activeIsland + 1 >= state.numIslands ? 0 : state.activeIsland + 1,
    }));
  },
  rotateCamLeft: () => {
    set((state) => ({
      camRotateLeftRequired: true,
      activeIsland:
        state.activeIsland - 1 < 0
          ? state.numIslands - 1
          : state.activeIsland - 1,
    }));
  },
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
  animatingSceneDown: false,
  animatingSceneUp: false,
  activeScene: "main",
  nextScene: "",
  nextIslands: 0,
  nextLevel: 0,
  animateNextScene: (nextScene) =>
    set({
      animatingSceneDown: true,
      nextIslands: nextScene.islands,
      nextLevel: nextScene.level,
      nextScene: nextScene.scene,
    }),
  animateSceneUp: () => {
    set((state) => ({
      animatingSceneDown: false,
      animatingSceneUp: true,
      activeScene: state.nextScene,
      numIslands: state.nextIslands,
      currentLevel: state.nextLevel,
    }));
  },
  resetSceneAnimation: () =>
    set({ animatingSceneDown: false, animatingSceneUp: false }),
  currentLevel: 0,
  setCurrentLevel: (level) => set({ currentLevel: level }),
  setActiveScene: (scene) =>
    set({ activeScene: scene, animateSceneDown: true }),
}));

export default useStore;
