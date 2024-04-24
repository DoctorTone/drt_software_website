import React, {useRef, useState, useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import {SCENE} from "../state/Config"

const Meteor = () => {
    const [showMeteor, setShowMeteor] = useState(false);
    const texture = useTexture("./textures/meteor.png");
    const meteorRef = useRef();

useEffect(() => {
    setInterval(() => {
        setShowMeteor(true);
        // DEBUG
        console.log("Meteor true")
    }, SCENE.METEOR_TIME * 1000);
}, []);

    useFrame((state, delta) => {
        if(showMeteor) {
            meteorRef.current.position.x -= delta * SCENE.METEOR_SPEED;
            if(meteorRef.current.position.x <= -SCENE.METEOR_START[0]) {
                setShowMeteor(false);
                meteorRef.current.position.x = SCENE.METEOR_START[0];
                // DEBUG
                console.log("Meteor false");
            }
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