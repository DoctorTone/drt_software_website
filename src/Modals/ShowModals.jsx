import React from "react";
import { MODALS } from "../state/Config.js";

import AboutModal from "./AboutModal.jsx";
import ContactModal from "./ContactModal.jsx";
import FinanceModal from "./FinanceModal.jsx";
import InfoModal from "./InfoModal.jsx";
import MedVizModal from "./MedVizModal.jsx";
import PandemicModal from "./PandemicModal.jsx";
import PersonModal from "./PersonModal.jsx";
import PhysicsModal from "./PhysicsModal.jsx";
import RealTimeModal from "./RealTimeModal.jsx";
import ServicesModal from "./ServicesModal.jsx";
import ShaderModal from "./ShaderModal.jsx";
import SleepModal from "./SleepModal.jsx";
import StartUpModal from "./StartUpModal.jsx";
import TechModal from "./TechModal.jsx";
import VRModal from "./VRModal.jsx";

const ShowModals = ({ visibleModal }) => {
	const renderModal = () => {
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
			case MODALS.PERSON:
				return <PersonModal showModal={true} />;
			case MODALS.PHYSICS:
				return <PhysicsModal showModal={true} />;
			case MODALS.REALTIME:
				return <RealTimeModal showModal={true} />;
			case MODALS.SERVICES:
				return <ServicesModal showModal={true} />;
			case MODALS.SHADERS:
				return <ShaderModal showModal={true} />;
			case MODALS.SLEEP:
				return <SleepModal showModal={true} />;
			case MODALS.START:
				return <StartUpModal showModal={true} />;
			case MODALS.TECH:
				return <TechModal showModal={true} />;
			case MODALS.VR:
				return <VRModal showModal={true} />;
			default:
				return null;
		}
	};

	return <>{renderModal()}</>;
};

export default ShowModals;
