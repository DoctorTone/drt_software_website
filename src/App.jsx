import { Canvas } from "@react-three/fiber";
import Levels from "./Levels/Levels.jsx";
import Lights from "./Scenes/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import ShowModals from "./Modals/ShowModals.jsx";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";
import UILevels from "./UI/UILevels.jsx";

const App = () => {
  const currentLevel = useStore((state) => state.currentLevel);
  const currentVisibleModal = useStore((state) => state.currentVisibleModal);

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Lights />
        <Levels levelName={currentLevel} />
      </Canvas>
      <UILevels levelName={currentLevel} />
      <ShowModals visibleModal={currentVisibleModal} />
    </>
  );
};

export default App;
