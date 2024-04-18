import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../state/store";
import { SCENE } from "../state/Config.js";

const Overlay = ({ fadeIn, fadeOut, color, ...props }) => {
  const matRef = useRef();

  let fadeInEnabled = fadeIn;
  let fadeOutEnabled = fadeOut;

  useFrame((state, delta) => {
    if (fadeOutEnabled) {
      matRef.current.opacity -= delta * SCENE.TRANSITION_DELAY;
      if (matRef.current.opacity < 0) {
        matRef.current.opacity = 0;
      }
    }
    if (fadeInEnabled) {
      matRef.current.opacity += delta * SCENE.TRANSITION_DELAY;
      if (matRef.current.opacity >= 1) {
        matRef.current.opacity = 1;
      }
    }
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[1000, 1000]} />
      <meshBasicMaterial
        ref={matRef}
        color={color || 0x454545}
        transparent={true}
      />
    </mesh>
  );
};

export default Overlay;
