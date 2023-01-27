import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sky } from "@react-three/drei";
import CameraControl from "./UI/CameraControl.js";
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

  const camRotRequired = useStore((state) => state.camRightRequired);
  // DEBUG
  console.log("Cam rot required = ", camRotRequired);

  return (
    <>
      <Canvas camera={{ position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <pointLight position={lightPosition} />
        <Sky sunPosition={[1, 0.15, 0]} />
        <IslandDRT />
        <IslandPortfolio />
        <IslandContact />
        <IslandServices />

        <OrbitControls />
      </Canvas>
      <CameraControl />
    </>
  );
};

export default App;
