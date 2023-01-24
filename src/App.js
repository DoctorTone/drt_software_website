import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sky } from "@react-three/drei";

import { Island } from "./components/Island.js";
import { Tree } from "./components/Tree.js";

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sky />
      <Float speed={2}>
        <Island position={[0, 0, 6]} />
        <Tree position={[-1, 1.5, 6]} scale={0.05} />
      </Float>
      <Float>
        <Island position={[5, 0, 0]} />
      </Float>
      <Float>
        <Island position={[-5, 0, 0]} />
      </Float>

      <OrbitControls />
    </Canvas>
  );
};

export default App;
