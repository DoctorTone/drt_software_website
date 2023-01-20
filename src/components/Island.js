import React from "react";
import { useGLTF } from "@react-three/drei";

const Island = () => {
  const model = useGLTF("./models/simpleIsland.glb");

  return <primitive object={model.scene} />;
};

export default Island;
