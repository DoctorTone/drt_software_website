import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.js";
import CameraControl from "./UI/CameraControl.js";

import { SCENE } from "./state/Config.js";

const App = () => {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <ThreeApp />
      </Canvas>
      <CameraControl />
    </>
  );
};

export default App;
