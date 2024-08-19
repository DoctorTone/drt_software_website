import { create } from "zustand";
import { SCENE, MODALS, TRANSITIONS } from "./Config.js";

const useStore = create((set) => ({
  // Levels in system
  levels: ["Landing", "Portfolio", "DataViz"],
  mainLevels: ["about", "services", "why", "contact", "projects", "tech"],
  portfolioLevels: [
    "configurator",
    "editor",
    "physics",
    "space",
    "vr",
    "effects",
    "performance",
    "ar",
  ],
  dataLevels: ["medical", "finance", "pandemic", "sleep", "realtime"],
  currentLevel: "Landing",
  currentLevelTable: null,
  setCurrentLevel: (levelName) =>
    set((state) => ({
      currentLevel: levelName,
      islandNumber: 0,
      currentLevelTable:
        levelName === "Main"
          ? state.mainLevels
          : levelName === "Portfolio"
          ? state.portfolioLevels
          : state.dataLevels,
    })),
  currentDirection: TRANSITIONS.LEFT,
  setCurrentDirection: (direction) => set({ currentDirection: direction }),
  onEnterLevel: false,
  onLeaveLevel: false,
  enterLevel: (status) => set({ onEnterLevel: status }),
  leaveLevel: (status) => set({ onLeaveLevel: status }),
  // Wireframe cubes on landing page
  cubeData: [1, 2, 3, 4, 5],
  // Day/night mode
  dayMode: true,
  toggleDayMode: () => set((state) => ({ dayMode: !state.dayMode })),
  // Island slot positions
  activeIsland: "configurator",
  targetIsland: "configurator",
  islandNumber: 0,
  currentSlots: ["Contact", "About", "Services"],
  getSlotPosition: (slots, island) => {
    for (let i = 0; i < slots.length; ++i) {
      if (slots[i] === island) return i;
    }

    return -1;
  },
  ignoreButtonPress: false,
  setActiveIsland: (island) => set({ activeIsland: island }),
  setTargetIsland: (island) => {
    set((state) => ({
      targetIsland:
        island < 0
          ? state.currentLevelTable[state.currentLevelTable.length - 1]
          : island === state.currentLevelTable.length
          ? state.currentLevelTable[0]
          : state.currentLevelTable[island],
      islandNumber:
        island < 0
          ? state.currentLevelTable.length - 1
          : island === state.currentLevelTable.length
          ? 0
          : island,
    }));
  },
  transitionPhase: TRANSITIONS.FADE_OUT,
  setTransitionPhase: (phase) => set({ transitionPhase: phase }),
  updateSlots: (slots) => set({ currentSlots: [...slots] }),
  overlayFaded: false,
  setOverlayFaded: (faded) => set({ overlayFaded: faded }),
  setNumIslands: (islands) => set({ numIslands: islands }),
  fadeOverlay: 0,
  setFadeOverlay: (fade) => set({ fadeOverlay: fade }),
  cameraRotation: SCENE.CAM_ROTATE_NONE,
  rotateCamRight: () => {
    set((state) => ({
      ignoreButtonPress: true,
      cameraRotation: SCENE.CAM_ROTATE_RIGHT,
      activeIsland:
        state.activeIsland + 1 >= state.numIslands ? 0 : state.activeIsland + 1,
    }));
  },
  rotateCamLeft: () => {
    set((state) => ({
      ignoreButtonPress: true,
      cameraRotation: SCENE.CAM_ROTATE_LEFT,
      activeIsland:
        state.activeIsland - 1 < 0
          ? state.numIslands - 1
          : state.activeIsland - 1,
    }));
  },
  resetCamRotate: () =>
    set({ ignoreButtonPress: false, cameraRotation: SCENE.CAM_ROTATE_NONE }),

  // Speech bubbles
  speechBubbleVisible: true,
  displaySpeechBubble: (status) => set({ speechBubbleVisible: status }),

  // Modals
  currentVisibleModal: MODALS.NONE,
  setVisibleModal: (modalNumber) => set({ currentVisibleModal: modalNumber }),
  startUpModalVisible: false,
  startUpModalShown: false,
  showStartUpModal: (show) =>
    set({ startUpModalVisible: show, startUpModalShown: true }),
  contactModalVisible: false,
  showContactModal: (show) => set({ contactModalVisible: show }),
  servicesModalVisible: false,
  showServicesModal: (show) => set({ servicesModalVisible: show }),
  infoModalVisible: false,
  showInfoModal: (show) => set({ infoModalVisible: show }),
  personModalVisible: false,
  showPersonModal: (show) => set({ personModalVisible: show }),
  medVizModalVisible: false,
  showMedVizModal: (show) => set({ medVizModalVisible: show }),
  physicsModalVisible: false,
  showPhysicsModal: (show) => set({ physicsModalVisible: show }),
  shaderModalVisible: false,
  showShaderModal: (show) => set({ shaderModalVisible: show }),
  techModalVisible: false,
  showTechModal: (show) => set({ techModalVisible: show }),
  VRModalVisible: false,
  showVRModal: (show) => set({ VRModalVisible: show }),
  realTimeModalVisible: false,
  showRealTimeModal: (show) => set({ realTimeModalVisible: show }),
  covidVizModalVisible: false,
  showCovidVizModal: (show) => set({ covidVizModalVisible: show }),
  financeVizModalVisible: false,
  showFinanceVizModal: (show) => set({ financeVizModalVisible: show }),
  sleepVizModalVisible: false,
  showSleepVizModal: (show) => set({ sleepVizModalVisible: show }),

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
      activeIsland: nextScene.activeIsland,
    }),
  updateSceneAnimationState: (direction) => {
    set((state) => ({
      sceneAnimationState: direction,
      activeScene: state.nextScene,
      numIslands: state.nextIslands,
    }));
  },
  setSceneAnimationState: (direction) =>
    set({ sceneAnimationState: direction }),
  setActiveScene: (scene) =>
    set({ activeScene: scene, animateSceneDown: true }),
}));

export default useStore;
