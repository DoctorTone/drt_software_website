import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.js";
import CameraControl from "./UI/CameraControl.js";
import NavigationUI from "./UI/NavigationUI.js";
import AboutModal from "./UI/AboutModal.js";
import ContactModal from "./UI/ContactModal.js";
import ServicesModal from "./UI/ServicesModal.js";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
  const aboutModalVisible = useStore((state) => state.aboutModalVisible);
  const contactModalVisible = useStore((state) => state.contactModalVisible);
  const servicesModalVisible = useStore((state) => state.servicesModalVisible);

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <ThreeApp />
      </Canvas>
      <CameraControl />
      <NavigationUI />
      <AboutModal showModal={aboutModalVisible} />
      <ContactModal showModal={contactModalVisible} />
      <ServicesModal showModal={servicesModalVisible} />
    </>
  );
};

export default App;
