import * as THREE from "three";

const SCENE = {
  cameraPosition: [0, 4, 10.5],
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
  DOWNWARD_SPEED: 15,
  UPWARD_SPEED: 20,
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
};

const ISLANDS = {
  // DRT island
  DRTPosition: [0, 0, 6],
  DRTModelPosition: [0.2, 2.2, 6.4],
  DRTTextPosition: [0, 3, 6.4],
  DRTTreePosition: [-1, 1.5, 6],
  // Portfolio island
  PortfolioPosition: [6, 0, 0],
  PortfolioModelPosition: [6, 2, 0],
  PortfolioTextPosition: [6, 3.25, 0],
  // Contact island
  ContactPosition: [-6, 0, 0],
  ContactModelPosition: [-6, 2.1, -0.15],
  ContactTextPosition: [-6, 2.75, 0],
  // Services island
  ServicesPosition: [0, 0, -6],
  ServicesModelPosition: [0, 2.15, -6],
  ServicesTextPosition: [0, 2.85, -6],
  // Physics island
  PhysicsPosition: [1.854, 0, -5.706],
  PhysicsModelPosition: [1.854, 2.2, -5.706],
  PhysicsTextPosition: [1.854, 3, -5.706],
  PhysicsTextRotation: -3.5,
  // Data Viz island
  DataVizPosition: [6, 0, 0],
  DataVizModelPosition: [6.25, 1.8, 0],
  DataVizTextPosition: [6.25, 3, 0],
  DataVizTextRotation: Math.PI / 2,
  // Shader island
  ShaderPosition: [-3.927, 0, -3.527],
  ShaderModelPosition: [-3.927, 2.35, -3.527],
  ShaderTextPosition: [-3.927, 3.2, -3.527],
  ShaderTextRotation: 4.15,
  // Tech island
  TechPosition: [-3.927, 0, 3.527],
  TechModelPosition: [-3.927, 2.2, 3.527],
  TechTextPosition: [-3.927, 3, 3.527],
  TechTextRotation: -1,
  // VR island
  VRPosition: [1.854, 0, 5.706],
  VRModelPosition: [4.5, -7, 5.5],
  VRTextPosition: [1.9, 3.25, 5.706],
  VRTextRotation: 0.3,
  // Med viz island
  MedVizPosition: [6, 0, 0],
  MedVizModelPosition: [6, 2, 0],
  MedVizTextPosition: [6, 3.5, 0],
  // Brain viz island
  BrainVizPosition: [-3.927, 0, -3.527],
  BrainVizModelPosition: [-3.927, 2, -3.527],
  BrainVizTextPosition: [-3.927, 3.5, -3.527],
  // Covid viz island
  CovidVizPosition: [-3.927, 0, 3.527],
  CovidVizModelPosition: [-3.927, 2, 3.527],
  CovidVizTextPosition: [-3.927, 3.5, 3.527],
  // Finance viz island
  FinanceVizPosition: [1.854, 0, 5.706],
  FinanceVizModelPosition: [1.854, 2, 5.706],
  FinanceVizTextPosition: [1.854, 3.5, 5.706],
  // Sleep viz island
  SleepVizPosition: [1.854, 0, -5.706],
  SleepVizModelPosition: [1.854, 2, -5.706],
  SleepVizTextPosition: [1.854, 3.5, -5.706],
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

export { SCENE, ISLANDS, MATERIALS };
