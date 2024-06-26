import { Canvas } from "@react-three/fiber";
import Levels from "./Levels/Levels.jsx";
import Lights from "./Scenes/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import { getCameraPosition } from "./utils/Utils.jsx";
import ShowModals from "./Modals/ShowModals.jsx";
import useStore from "./state/store.js";
import UILevels from "./UI/UILevels.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Logo } from "./components/Logo.jsx";

const INTERACTIVE = false;
const App = () => {
  const currentLevel = useStore((state) => state.currentLevel);
  const currentVisibleModal = useStore((state) => state.currentVisibleModal);

  return (
    <>
      {currentLevel !== "Landing" && <Logo />}
      {currentLevel !== "Landing" && <NavBar level={currentLevel} />}
      <Canvas camera={{ position: getCameraPosition(window.innerWidth) }}>
        <Lights level={currentLevel} />
        <Levels levelName={currentLevel} />
        <OrbitControls
          enablePan={INTERACTIVE}
          enableRotate={INTERACTIVE}
          enableZoom={INTERACTIVE}
        />
      </Canvas>
      <UILevels levelName={currentLevel} />
      <ShowModals visibleModal={currentVisibleModal} />
    </>
  );
};

export default App;
