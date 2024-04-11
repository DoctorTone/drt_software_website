import { Canvas } from "@react-three/fiber";
import Landing from "./components/Landing.jsx";
import LandingText from "./components/LandingText.jsx";
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
      <LandingText />
    </>
  );
};

export default App;
