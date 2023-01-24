import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sky } from "@react-three/drei";

import { Island } from "./components/Island.js";

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sky />
      <Float>
        <Island position={[0, 0, 0]} />
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
