import React, { useRef, useEffect, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import useStore from "../state/store.js";
import { SCENE } from "../state/Config.js";

import { Cloud } from "../Models/Cloud.jsx";
import MainScene from "../Scenes/MainScene.jsx";
import PortfolioScene from "../Scenes/PortfolioScene.jsx";
import DataVizScene from "../Scenes/DataVizScene.jsx";
import { Loading } from "./Loading.jsx";
import Overlay from "./Overlay.jsx";

const ThreeApp = () => {
	const currentSlots = useStore((state) => state.currentSlots);
	const currentLevel = useStore((state) => state.currentLevel);
	const fadeOverlayIn = useStore((state) => state.fadeOverlayIn);

	return (
		<>
			<Overlay fade={fadeOverlayIn} position-z={9} />
			<ambientLight intensity={SCENE.ambientIntensity} />
			<pointLight position={SCENE.lightPosition} />
			<Sky sunPosition={SCENE.sunPosition} />
			<Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
			<group>
				{currentLevel === SCENE.MAIN_LEVEL && (
					<group name="main">
						<Suspense fallback={<Loading />}>
							<MainScene slots={currentSlots} />
						</Suspense>
					</group>
				)}
				{currentLevel === SCENE.LEVEL_1 && (
					<group name="portfolio">
						<Suspense fallback={null}>
							<PortfolioScene />
						</Suspense>
					</group>
				)}
				{currentLevel === SCENE.LEVEL_2 && (
					<group name="dataviz">
						<Suspense fallback={null}>
							<DataVizScene />
						</Suspense>
					</group>
				)}
			</group>

			<OrbitControls enablePan={true} enableRotate={true} />
		</>
	);
};

export default ThreeApp;
