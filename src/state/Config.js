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
};

export { SCENE };
