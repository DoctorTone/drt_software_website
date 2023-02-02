import React, { Suspense, useState } from "react";
import { Float, Text, useCursor } from "@react-three/drei";
import { Island } from "../Island.js";
import { Portfolio } from "../Portfolio.js";
import { SCENE } from "../../state/Config.js";
import useSound from "use-sound";
import useStore from "../../state/store.js";

export const IslandPortfolio = () => {
  const [hovered, setHovered] = useState(false);
  const moveSceneDown = useStore((state) => state.moveSceneDown);

  const selectIsland = () => {
    play();
    moveSceneDown();
  };

  const pointerOver = () => {
    setHovered(true);
  };

  const pointerOut = () => {
    setHovered(false);
  };

  useCursor(hovered);
  const [play] = useSound("./sounds/select.mp3", { volume: 0.25 });

  return (
    <Float rotationIntensity={SCENE.rotationIntensity}>
      <group
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={selectIsland}>
        <Island position={[5, 0, 0]} />
        <Portfolio position={[5, 2, 0]} />
        <Suspense fallback={null}>
          <Text
            color="white"
            center
            fontSize={0.2}
            position={[5, 3.25, 0]}
            rotation-y={Math.PI / 2}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="black">
            Portfolio
          </Text>
        </Suspense>
      </group>
    </Float>
  );
};
