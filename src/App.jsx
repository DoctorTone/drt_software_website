import { Canvas } from "@react-three/fiber";
import LandingText from "./UI/LandingText.jsx";
import Levels from "./Levels/Levels.jsx";
import Lights from "./Scenes/Lights.jsx";
import { OrbitControls } from "@react-three/drei";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";
import UILevels from "./UI/UILevels.jsx";

const App = () => {
  const currentLevel = useStore((state) => state.currentLevel);

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Lights />
        <Levels levelName={currentLevel} />
        <OrbitControls enablePan={true} enableRotate={true} />
      </Canvas>
      <UILevels levelName={currentLevel} />
    </>
  );
};

export default App;
