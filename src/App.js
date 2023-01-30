import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.js";
import CameraControl from "./UI/CameraControl.js";
import AboutModal from "./UI/AboutModal.js";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
  const aboutModalVisible = useStore((state) => state.aboutModalVisible);
  // DEBUG
  console.log("Visible = ", aboutModalVisible);

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <ThreeApp />
      </Canvas>
      <CameraControl />
      <AboutModal showModal={aboutModalVisible} />
    </>
  );
};

export default App;
