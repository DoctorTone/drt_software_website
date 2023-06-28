import React from "react";
import { MODALS } from "../state/Config.js";

import AboutModal from "./AboutModal.jsx";
// import StartUpModal from "./Modals/StartUpModal.jsx";
// import ContactModal from "./Modals/ContactModal.jsx";
// import ServicesModal from "./Modals/ServicesModal.jsx";
// import InfoModal from "./Modals/InfoModal.jsx";
// import MedVizModal from "./Modals/MedVizModal.jsx";
// import PhysicsModal from "./Modals/PhysicsModal.jsx";
// import ShaderModal from "./Modals/ShaderModal.jsx";
// import TechModal from "./Modals/TechModal.jsx";
// import VRModal from "./Modals/VRModal.jsx";
// import RealTimeModal from "./Modals/RealTimeModal.jsx";
// import SleepModal from "./Modals/SleepModal.jsx";
// import PandemicModal from "./Modals/PandemicModal.jsx";
// import FinanceModal from "./Modals/FinanceModal.jsx";
// import PersonModal from "./Modals/PersonModal.jsx";

const ShowModals = ({ visibleModal }) => {
  const renderModal = () => {
    switch (visibleModal) {
      case MODALS.ABOUT:
        return <AboutModal showModal={true} />;
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ShowModals;
