import React, { useState } from "react";
import { MODALS } from "../state/Config.js";

import AboutModal from "./AboutModal.jsx";
import ContactModal from "./ContactModal.jsx";
import FinanceModal from "./FinanceModal.jsx";
import InfoModal from "./InfoModal.jsx";
import MedVizModal from "./MedVizModal.jsx";
import PandemicModal from "./PandemicModal.jsx";
import PhysicsModal from "./PhysicsModal.jsx";
import RealTimeModal from "./RealTimeModal.jsx";
import ServicesModal from "./ServicesModal.jsx";
import EffectsModal from "./EffectsModal.jsx";
import SleepModal from "./SleepModal.jsx";
import StartUpModal from "./StartUpModal.jsx";
import TechModal from "./TechModal.jsx";
import VRModal from "./VRModal.jsx";
import ARModal from "./ARModal.jsx";
import ProjectsModal from "./ProjectsModal.jsx";
import LatestModal from "./LatestModal.jsx";
import EditorModal from "./EditorModal.jsx";
import PerformanceModal from "./PerformanceModal.jsx";
import ConfiguratorModal from "./ConfiguratorModal.jsx";
import WhyModal from "./WhyModal.jsx";
import SpaceModal from "./SpaceModal.jsx";

const ShowModals = ({ visibleModal }) => {
  const [selectSound] = useState(() => new Audio("./sounds/select.wav"));

  const renderModal = () => {
    if (visibleModal !== MODALS.NONE) {
      selectSound.play();
    }

    switch (visibleModal) {
      case MODALS.ABOUT:
        return <AboutModal showModal={true} />;
      case MODALS.CONTACT:
        return <ContactModal showModal={true} />;
      case MODALS.FINANCE:
        return <FinanceModal showModal={true} />;
      case MODALS.INFO:
        return <InfoModal showModal={true} />;
      case MODALS.MEDICAL:
        return <MedVizModal showModal={true} />;
      case MODALS.PANDEMIC:
        return <PandemicModal showModal={true} />;
      case MODALS.PHYSICS:
        return <PhysicsModal showModal={true} />;
      case MODALS.REALTIME:
        return <RealTimeModal showModal={true} />;
      case MODALS.SERVICES:
        return <ServicesModal showModal={true} />;
      case MODALS.EFFECTS:
        return <EffectsModal showModal={true} />;
      case MODALS.SLEEP:
        return <SleepModal showModal={true} />;
      case MODALS.START:
        return <StartUpModal showModal={true} />;
      case MODALS.TECH:
        return <TechModal showModal={true} />;
      case MODALS.VR:
        return <VRModal showModal={true} />;
      case MODALS.AR:
        return <ARModal showModal={true} />;
      case MODALS.PROJECTS:
        return <ProjectsModal showModal={true} />;
      case MODALS.LATEST:
        return <LatestModal showModal={true} />;
      case MODALS.EDITOR:
        return <EditorModal showModal={true} />;
      case MODALS.PERFORMANCE:
        return <PerformanceModal showModal={true} />;
      case MODALS.CONFIGURATOR:
        return <ConfiguratorModal showModal={true} />;
      case MODALS.WHY:
        return <WhyModal showModal={true} />;
      case MODALS.SPACE:
        return <SpaceModal showModal={true} />;
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default ShowModals;
