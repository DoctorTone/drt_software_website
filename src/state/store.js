import { create } from "zustand";
import { SCENE } from "./Config.js";

const useStore = create((set) => ({
  // Camera rotations
  activeIsland: 0,
  numIslands: 4,
  setActiveIsland: (island) => set({ activeIsland: island }),
  setNumIslands: (islands) => set({ numIslands: islands }),
  cameraRotation: SCENE.CAM_ROTATE_NONE,
  rotateCamRight: () => {
    set((state) => ({
      cameraRotation: SCENE.CAM_ROTATE_RIGHT,
      activeIsland:
        state.activeIsland + 1 >= state.numIslands ? 0 : state.activeIsland + 1,
    }));
  },
  rotateCamLeft: () => {
    set((state) => ({
      cameraRotation: SCENE.CAM_ROTATE_LEFT,
      activeIsland:
        state.activeIsland - 1 < 0
          ? state.numIslands - 1
          : state.activeIsland - 1,
    }));
  },
  resetCamRotate: () => set({ cameraRotation: SCENE.CAM_ROTATE_NONE }),

  // Modals
  aboutModalVisible: false,
  showAboutModal: (show) => set({ aboutModalVisible: show }),
  contactModalVisible: false,
  showContactModal: (show) => set({ contactModalVisible: show }),
  servicesModalVisible: false,
  showServicesModal: (show) => set({ servicesModalVisible: show }),
  infoModalVisible: false,
  showInfoModal: (show) => set({ infoModalVisible: show }),
  medVizModalVisible: false,
  showMedVizModal: (show) => set({ medVizModalVisible: show }),

  // Scene animations
  sceneAnimationState: SCENE.ANIMATE_NONE,
  activeScene: "main",
  nextScene: "",
  nextIslands: 0,
  nextLevel: 0,
  animateNextScene: (nextScene) =>
    set({
      sceneAnimationState: nextScene.direction,
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
  setSceneAnimationState: (direction) =>
    set({ sceneAnimationState: direction }),
  currentLevel: 0,
  setCurrentLevel: (level) => set({ currentLevel: level }),
  setActiveScene: (scene) =>
    set({ activeScene: scene, animateSceneDown: true }),
}));

export default useStore;
