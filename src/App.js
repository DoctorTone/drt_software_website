import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sky, Text3D } from "@react-three/drei";

import { Island } from "./components/Island.js";
import { Tree } from "./components/Tree.js";
import { Work } from "./components/Work.js";

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sky />
      <Float speed={2}>
        <Island position={[0, 0, 6]} />
        <Tree position={[-1, 1.5, 6]} scale={0.05} />
        <Text3D
          position={[-0.75, 1.5, 6]}
          font="./fonts/helvetiker_regular.typeface.json">
          DRT
          <meshStandardMaterial color="orange" />
        </Text3D>
      </Float>
      <Float>
        <Island position={[5, 0, 0]} />
        <Work rotation-y={Math.PI / 2} scale={0.2} position={[5, 2.5, 0]} />
      </Float>
      <Float>
        <Island position={[-5, 0, 0]} />
      </Float>
      <Float>
        <Island position={[0, 0, -5]} />
      </Float>

      <OrbitControls />
    </Canvas>
  );
};

export default App;
