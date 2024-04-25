import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { SCENE } from "../state/Config";

const Meteor = () => {
  const [showMeteor, setShowMeteor] = useState(false);
  const texture = useTexture("./textures/meteor.png");
  const meteorRef = useRef();
  const elapsedRef = useRef(SCENE.METEOR_TIME * 1000);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setShowMeteor(true);
      // DEBUG
      console.log("Meteor true");
    }, elapsedRef.current);

    return () => clearInterval(intervalID);
  }, []);

  useFrame((state, delta) => {
    if (showMeteor) {
      meteorRef.current.position.x -= delta * SCENE.METEOR_SPEED;
      if (meteorRef.current.position.x <= -SCENE.METEOR_START[0]) {
        meteorRef.current.position.x = SCENE.METEOR_START[0];
        setShowMeteor(false);
        elapsedRef.current = SCENE.METEOR_TIME * 3 * 1000;
        setTimeout(() => {
          setShowMeteor(true);
        }, elapsedRef.current);
        // DEBUG
        console.log("Meteor false");
      }
    }
  });

  return (
    <group>
      <sprite position={SCENE.METEOR_START} ref={meteorRef}>
        <spriteMaterial attach="material" map={texture} />
      </sprite>
    </group>
  );
};

export default Meteor;
