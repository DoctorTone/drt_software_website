import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.js";
import CameraControl from "./UI/CameraControl.js";
import NavigationUI from "./UI/NavigationUI.js";
import AboutModal from "./Modals/AboutModal.js";
import ContactModal from "./Modals/ContactModal.js";
import ServicesModal from "./Modals/ServicesModal.js";
import InfoModal from "./Modals/InfoModal.js";
import MedVizModal from "./Modals/MedVizModal.js";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
  const aboutModalVisible = useStore((state) => state.aboutModalVisible);
  const contactModalVisible = useStore((state) => state.contactModalVisible);
  const servicesModalVisible = useStore((state) => state.servicesModalVisible);
  const infoModalVisible = useStore((state) => state.infoModalVisible);
  const medVizModalVisible = useStore((state) => state.medVizModalVisible);

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
      <InfoModal showModal={infoModalVisible} />
      <MedVizModal showModal={medVizModalVisible} />
    </>
  );
};

export default App;
