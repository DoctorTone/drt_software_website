import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { Phone } from "../Phone.js";
import { SCENE } from "../../state/Config.js";
import useSound from "use-sound";
import useStore from "../../state/store.js";

export const IslandContact = () => {
  const [hovered, setHovered] = useState(false);
  const showContactModal = useStore((state) => state.showContactModal);

  const selectIsland = () => {
    showContactModal(true);
    play();
  };

  const pointerOver = () => {
    setHovered(true);
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useCursor(hovered);
  const [play] = useSound("./sounds/select.wav", { volume: 0.25 });

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Island position={[-5, 0, 0]} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={0.2}
            position={[-5.3, 2.75, 0]}
            rotation-y={-Math.PI / 2}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="black">
            Contact
          </Text>
        </Suspense>
        <Phone position={[-5.25, 2.1, -0.15]} scale={0.007} />
      </group>
    </Float>
  );
};
