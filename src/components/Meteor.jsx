import React, {useRef, useState, useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import {SCENE} from "../state/Config"

const Meteor = () => {
    const [showMeteor, setShowMeteor] = useState(false);
    const texture = useTexture("./textures/meteor.png");
    const meteorRef = useRef();
    
useEffect(() => {
    setTimeout(() => {
        setShowMeteor(true);
    }, SCENE.METEOR_TIME * 1000);
}, []);

    useFrame((state, delta) => {
        if(showMeteor) {
            meteorRef.current.position.x -= delta * SCENE.METEOR_SPEED;
        }
    })

    return (
        <group>
          <sprite position={SCENE.METEOR_START} ref={meteorRef}>
            <spriteMaterial attach="material" map={texture} />
          </sprite>
          </group>
    )
}

export default Meteor;