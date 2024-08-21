import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instance } from "@react-three/drei";

export const WireCube = (...props) => {
  const boxRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (boxRef.current) {
      boxRef.current.rotation.set(
        Math.cos(t / 4) / 2,
        Math.sin(t / 4) / 2,
        Math.cos(t / 1.5) / 2
      );
      boxRef.current.position.x = 2 * Math.sin(t / 2);
    }
  });

  return (
    <group
      {...props}
      scale={0.35}
      position={[Math.random() * 4 - 2, Math.random() * 4 - 2, 0]}
      rotation={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
    >
      <Instance ref={boxRef} />
    </group>
  );
};
