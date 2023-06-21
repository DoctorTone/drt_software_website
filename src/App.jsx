import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import CameraControl from "./UI/CameraControl.jsx";
import NavigationUI from "./UI/NavigationUI.jsx";
import AboutModal from "./Modals/AboutModal.jsx";
import StartUpModal from "./Modals/StartUpModal.jsx";
import ContactModal from "./Modals/ContactModal.jsx";
import ServicesModal from "./Modals/ServicesModal.jsx";
import InfoModal from "./Modals/InfoModal.jsx";
import MedVizModal from "./Modals/MedVizModal.jsx";
import PhysicsModal from "./Modals/PhysicsModal.jsx";
import ShaderModal from "./Modals/ShaderModal.jsx";
import TechModal from "./Modals/TechModal.jsx";
import VRModal from "./Modals/VRModal.jsx";
import RealTimeModal from "./Modals/RealTimeModal.jsx";
import SleepModal from "./Modals/SleepModal.jsx";
import PandemicModal from "./Modals/PandemicModal.jsx";
import FinanceModal from "./Modals/FinanceModal.jsx";

import Bubble from "./components/Bubble.jsx";

import { SCENE } from "./state/Config.js";
import useStore from "./state/store.js";

const App = () => {
  const aboutModalVisible = useStore((state) => state.aboutModalVisible);
  const startUpModalVisible = useStore((state) => state.startUpModalVisible);
  const contactModalVisible = useStore((state) => state.contactModalVisible);
  const servicesModalVisible = useStore((state) => state.servicesModalVisible);
  const infoModalVisible = useStore((state) => state.infoModalVisible);
  const medVizModalVisible = useStore((state) => state.medVizModalVisible);
  const physicsModalVisible = useStore((state) => state.physicsModalVisible);
  const shaderModalVisible = useStore((state) => state.shaderModalVisible);
  const techModalVisible = useStore((state) => state.techModalVisible);
  const VRModalVisible = useStore((state) => state.VRModalVisible);
  const realTimeModalVisible = useStore((state) => state.realTimeModalVisible);
  const sleepVizModalVisible = useStore((state) => state.sleepVizModalVisible);
  const covidVizModalVisible = useStore((state) => state.covidVizModalVisible);
  const financeVizModalVisible = useStore(
    (state) => state.financeVizModalVisible
  );

  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
        <ThreeApp />
      </Canvas>
      <CameraControl />
      <NavigationUI />
      {/* Add modal param to select modal */}
      <AboutModal showModal={aboutModalVisible} />
      <StartUpModal showModal={startUpModalVisible} />
      <ContactModal showModal={contactModalVisible} />
      <ServicesModal showModal={servicesModalVisible} />
      <InfoModal showModal={infoModalVisible} />
      <MedVizModal showModal={medVizModalVisible} />
      <PhysicsModal showModal={physicsModalVisible} />
      <ShaderModal showModal={shaderModalVisible} />
      <TechModal showModal={techModalVisible} />
      <VRModal showModal={VRModalVisible} />
      <RealTimeModal showModal={realTimeModalVisible} />
      <SleepModal showModal={sleepVizModalVisible} />
      <PandemicModal showModal={covidVizModalVisible} />
      <FinanceModal showModal={financeVizModalVisible} />
      <Bubble />
    </>
  );
};

export default App;
