import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import CameraControl from "./UI/CameraControl.jsx";
import NavigationUI from "./UI/NavigationUI.jsx";
import AboutModal from "./Modals/AboutModal.jsx";
import ContactModal from "./Modals/ContactModal.jsx";
import ServicesModal from "./Modals/ServicesModal.jsx";
import InfoModal from "./Modals/InfoModal.jsx";
import MedVizModal from "./Modals/MedVizModal.jsx";
import { Perf } from "r3f-perf";

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
        <Perf />
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
