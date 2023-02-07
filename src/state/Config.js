import * as THREE from "three";

const SCENE = {
  cameraPosition: [0, 4, 10],
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
  FLOOR_LEVEL: -30,
  FONT_SIZE: 0.2,
  FONT_OUTLINE_WIDTH: 0.02,
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
  PhysicsPosition: [6, 0, 0],
  PhysicsTextPosition: [6, 3, 0],
  // Data Viz island
  DataVizPosition: [1.854, 0, -5.706],
  DataVizTextPosition: [1.854, 3, -5.706],
  DataVizTextRotation: -2.827,
  // Shader island
  ShaderPosition: [-3.927, 0, -3.527],
  ShaderTextPosition: [-3.927, 3, -3.527],
  ShaderTextRotation: -4.084,
  // Tech island
  TechPosition: [-3.927, 0, 3.527],
  TechTextPosition: [-3.927, 3, 3.527],
  // VR island
  VRPosition: [1.854, 0, 5.706],
  VRTextPosition: [1.854, 3, 5.706],
};

export { SCENE, ISLANDS };
