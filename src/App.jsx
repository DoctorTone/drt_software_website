import { Canvas } from "@react-three/fiber";
import LandingText from "./components/LandingText.jsx";
import Levels from "./Levels/Levels.jsx";
import { OrbitControls } from "@react-three/drei";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
  const currentLevel = useStore((state) => state.currentLevel);

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Levels levelName={currentLevel} />
        <OrbitControls enablePan={true} enableRotate={true} />
      </Canvas>
      <LandingText />
    </>
  );
};

export default App;
