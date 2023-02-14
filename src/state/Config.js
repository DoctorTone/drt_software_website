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
  CYL_RADIUS: 1.5,
  CYL_HEIGHT: 1.25,
  CYL_SEGMENTS: 6,
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
  DataVizModelPosition: [6.25, 1.75, 0],
  DataVizTextPosition: [6.25, 3, 0],
  DataVizTextRotation: Math.PI / 2,
  // Shader island
  ShaderPosition: [-3.927, 0, -3.527],
  ShaderModelPosition: [-3.927, 2, -3.527],
  ShaderTextPosition: [-3.927, 3, -3.527],
  ShaderTextRotation: 4.15,
  // Tech island
  TechPosition: [-3.927, 0, 3.527],
  TechModelPosition: [-3.927, 2.2, 3.527],
  TechTextPosition: [-3.927, 3, 3.527],
  TechTextRotation: -1,
  // VR island
  VRPosition: [1.854, 0, 5.706],
  VRModelPosition: [4.5, -7.25, 5.5],
  VRTextPosition: [1.854, 3, 5.706],
  VRTextRotation: 0.3,
  // Med viz island
  MedVizPosition: [6, 0, 0],
};

export { SCENE, ISLANDS };
