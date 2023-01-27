import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sky } from "@react-three/drei";

import { IslandDRT } from "./components/IslandDRT.js";
import { IslandContact } from "./components/IslandContact.js";
import { IslandServices } from "./components/IslandServices.js";
import { IslandPortfolio } from "./components/IslandPortfolio.js";

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sky />
      <IslandDRT />
      <IslandPortfolio />
      <IslandContact />
      <IslandServices />

      <OrbitControls />
    </Canvas>
  );
};

export default App;
