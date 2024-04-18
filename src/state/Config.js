import * as THREE from "three";

const SCENE = {
  cameraPosition: [0, 1, 1.5],
  lightPosition: [10, 10, 10],
  rotationIntensity: 0.25,
  sunPosition: [1, 0.15, 0],
  ambientIntensity: 0.5,
  tempRot: new THREE.Quaternion(),
  Y_AXIS: new THREE.Vector3(0, 1, 0),
  MAIN_LEVEL: 0,
  LEVEL_1: 1,
  LEVEL_2: 2,
  LEVEL_3: 3,
  CLOUD_MAX: 30,
  CLOUD_MIN: -15,
  cloudPosition: [-15, 6, 0],
  cloudScale: [0.5, 0.25, 0.25],
  DOWNWARD_SPEED: 20,
  UPWARD_SPEED: 25,
  GROUND_LEVEL: -30,
  FONT_SIZE: 0.2,
  FONT_OUTLINE_WIDTH: 0.02,
  CYL_RADIUS: 1.75,
  CYL_HEIGHT: 0.25,
  CYL_SEGMENTS: 6,
  FLOOR_RADIUS: 22,
  FLOOR_HEIGHT: 0.5,
  FLOOR_SEGMENTS: 32,
  POOL_RADIUS: 3,
  POOL_HEIGHT: 1.5,
  POOL_SEGMENTS: 32,
  FLOOR_LEVEL: -1,
  CAM_ROTATE_NONE: 0,
  CAM_ROTATE_LEFT: 1,
  CAM_ROTATE_RIGHT: 2,
  ANIMATE_NONE: 0,
  ANIMATE_UP: 1,
  ANIMATE_DOWN: 2,
  ROTATE_TIMEOUT: 5000,
  ROTATION_SPEED: 1.25,
  FADE_DELAY: 1,
  TRANSITION_DELAY: 1,
  INITIAL_ANIMATION_TIME: 1,
  MODAL_DELAY: 250,
};

const TRANSITIONS = {
  FADE_NONE: 0,
  FADE_OUT: 1,
  FADE_IN: 2,
};

const ISLANDS = {
  // Position of each slot
  MAIN_POSITION: [0, 0, 6],
  // Main scene
  MAIN_LEVEL_ISLANDS: 4,
  LEVEL_1_ISLANDS: 5,
  LEVEL_2_ISLANDS: 5,
  ACTIVE_ISLAND: 3,
  // DRT island
  DRTPosition: [0, 0, 6],
  DRTModelPosition: [0, 2.2, 0.4],
  DRTTextPosition: [0, 3, 0.4],
  DRTTreePosition: [-1, 1.5, 0],
  // Portfolio island
  PortfolioPosition: [6, 0, 0],
  PortfolioModelPosition: [0, 2, 0],
  PortfolioTextPosition: [0, 3.25, 0],
  // Contact island
  ContactPosition: [-6, 0, 0],
  ContactModelPosition: [0, 2.1, -0.15],
  ContactTextPosition: [0, 2.75, 0],
  // Services island
  ServicesPosition: [0, 0, -6],
  ServicesModelPosition: [0, 2.15, 0],
  ServicesTextPosition: [0, 2.85, 0],
  // Physics island
  PhysicsPosition: [1.854, 0, -5.706],
  PhysicsModelPosition: [0, 2.2, 0],
  PhysicsTextPosition: [0, 3, 0],
  PhysicsTextRotation: -3.5,
  // VR island
  VRPosition: [6, 0, 0],
  VRModelPosition: [2, -7, -1.5],
  VRTextPosition: [0.25, 3.25, 0],
  VRTextRotation: Math.PI / 2,
  // AR island
  ARPosition: [6, 0, 0],
  ARModelPosition: [0, 1.5, 0],
  ARTextPosition: [0.25, 3, 0],
  ARTextRotation: Math.PI / 2,
  // Shader island
  ShaderPosition: [-3.927, 0, -3.527],
  ShaderModelPosition: [0, 2.35, 0],
  ShaderTextPosition: [0, 3.2, 0],
  ShaderTextRotation: 4.15,
  // Tech island
  TechPosition: [-3.927, 0, 3.527],
  TechModelPosition: [0, 2.2, 0],
  TechTextPosition: [0, 3, 0],
  TechTextRotation: -1,
  // Data Viz island
  DataVizPosition: [1.854, 0, 5.706],
  DataVizModelPosition: [2, 2, 5.5],
  DataVizTextPosition: [1.9, 3.25, 5.706],
  DataVizTextRotation: 0.3,
  // Med viz island
  MedVizPosition: [6, 0, 0],
  MedVizModelPosition: [0, 3, 0],
  MedVizTextPosition: [0, 4, 0],
  // Brain viz island
  BrainVizPosition: [-3.927, 0, -3.527],
  BrainVizModelPosition: [0, 3, 0],
  BrainVizTextPosition: [0, 4, 0],
  // Covid viz island
  CovidVizPosition: [-3.927, 0, 3.527],
  CovidVizModelPosition: [0, 3, 0],
  CovidVizTextPosition: [0, 4, 0],
  // Finance viz island
  FinanceVizPosition: [1.854, 0, 5.706],
  FinanceVizModelPosition: [0, 3, 0],
  FinanceVizTextPosition: [0, 4, 0],
  // Sleep viz island
  SleepVizPosition: [1.854, 0, -5.706],
  SleepVizModelPosition: [0, 3, 0],
  SleepVizTextPosition: [0, 4, 0],
};

const MODALS = {
  NONE: 0,
  ABOUT: 1,
  CONTACT: 2,
  FINANCE: 3,
  INFO: 4,
  MEDICAL: 5,
  PANDEMIC: 6,
  PERSON: 7,
  PHYSICS: 8,
  REALTIME: 9,
  SERVICES: 10,
  EFFECTS: 11,
  SLEEP: 12,
  START: 13,
  TECH: 14,
  VR: 15,
  AR: 16,
  PROJECTS: 17,
  LATEST: 18,
};

const SLOTS = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
};

const MATERIALS = {
  GRASS: new THREE.MeshLambertMaterial({ color: "green" }),
  EARTH: new THREE.MeshLambertMaterial({
    color: 0x210f00,
  }),
  CLOUD: new THREE.MeshLambertMaterial({ color: "white" }),
  GREY: new THREE.MeshLambertMaterial({ color: 0x333333 }),
  ORANGE: new THREE.MeshLambertMaterial({ color: 0xcc2906 }),
  SHINY_ORANGE: new THREE.MeshPhongMaterial({ color: 0xcc2906 }),
};

export { SCENE, ISLANDS, MODALS, MATERIALS, SLOTS, TRANSITIONS };
