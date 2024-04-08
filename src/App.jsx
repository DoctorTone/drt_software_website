import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import Landing from "./components/Landing.jsx";
import NavigationUI from "./UI/NavigationUI.jsx";
import ShowModals from "./Modals/ShowModals.jsx";
import Bubble from "./components/Bubble.jsx";
import { OrbitControls } from "@react-three/drei";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
  const currentVisibleModal = useStore((state) => state.currentVisibleModal);

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <Landing />
        <OrbitControls enablePan={true} enableRotate={true} />
      </Canvas>
    </>
  );
};

export default App;
