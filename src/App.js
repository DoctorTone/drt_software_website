import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sky } from "@react-three/drei";
import useStore from "./state/store.js";

import { IslandDRT } from "./components/IslandDRT.js";
import { IslandContact } from "./components/IslandContact.js";
import { IslandServices } from "./components/IslandServices.js";
import { IslandPortfolio } from "./components/IslandPortfolio.js";

const App = () => {
  const [cameraPosition, lightPosition] = useStore((state) => [
    state.cameraPosition,
    state.lightPosition,
  ]);

  return (
    <Canvas camera={{ position: cameraPosition }}>
      <ambientLight intensity={0.5} />
      <pointLight position={lightPosition} />
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
