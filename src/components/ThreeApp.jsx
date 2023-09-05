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

const ThreeApp = () => {
	const cameraRotation = useStore((state) => state.cameraRotation);
	const resetCamRotate = useStore((state) => state.resetCamRotate);

	const sceneAnimationState = useStore((state) => state.sceneAnimationState);
	const setSceneAnimationState = useStore(
		(state) => state.setSceneAnimationState
	);
	const updateSceneAnimationState = useStore(
		(state) => state.updateSceneAnimationState
	);

	const currentLevel = useStore((state) => state.currentLevel);
	const activeScene = useStore((state) => state.activeScene);
	const numIslands = useStore((state) => state.numIslands);

	const currentRot = useRef(0);
	const worldRot = useRef(0);
	const rotIncrement = useRef(Math.PI / 2);
	const topLevel = useRef();
	const allRefs = {
		main: useRef(),
		portfolio: useRef(),
		dataviz: useRef(),
	};

	let activeRef = useRef();

	useEffect(() => {
		allRefs["main"].current.position.y = 0;
	}, []);

	useEffect(() => {
		activeRef.current = allRefs[activeScene].current;
		rotIncrement.current = (Math.PI * 2) / numIslands;
	}, [activeScene, numIslands]);

	useFrame((state, delta) => {
		if (cameraRotation !== SCENE.CAM_ROTATE_NONE) {
			const direction = cameraRotation === SCENE.CAM_ROTATE_LEFT ? -1 : 1;
			currentRot.current += delta * SCENE.ROTATION_SPEED;
			if (currentRot.current > rotIncrement.current) {
				worldRot.current += rotIncrement.current * direction;
				currentRot.current = 0;
				topLevel.current.rotation.y = worldRot.current;
				resetCamRotate();
			} else {
				topLevel.current.rotation.y += delta * SCENE.ROTATION_SPEED * direction;
			}
		}

		if (sceneAnimationState === SCENE.ANIMATE_DOWN) {
			activeRef.current.position.y -= delta * SCENE.DOWNWARD_SPEED;
			if (activeRef.current.position.y < SCENE.GROUND_LEVEL) {
				activeRef.current.position.y = SCENE.GROUND_LEVEL;
				topLevel.current.rotation.y = -Math.PI / 2;
				worldRot.current = -Math.PI / 2;
				updateSceneAnimationState(SCENE.ANIMATE_UP);
			}
		}

		if (sceneAnimationState === SCENE.ANIMATE_UP) {
			activeRef.current.position.y += delta * SCENE.UPWARD_SPEED;
			if (activeRef.current.position.y > 0) {
				activeRef.current.position.y = 0;
				setSceneAnimationState(SCENE.ANIMATE_NONE);
			}
		}
	});

	return (
		<>
			<ambientLight intensity={SCENE.ambientIntensity} />
			<pointLight position={SCENE.lightPosition} />
			<Sky sunPosition={SCENE.sunPosition} />
			<Cloud position={SCENE.cloudPosition} scale={SCENE.cloudScale} />
			<group ref={topLevel}>
				{currentLevel === SCENE.MAIN_LEVEL && (
					<group
						ref={allRefs["main"]}
						name="main"
						position-y={SCENE.GROUND_LEVEL}
					>
						<Suspense fallback={<Loading />}>
							<MainScene slots={[0, 2, 1]} />
						</Suspense>
					</group>
				)}
				{currentLevel === SCENE.LEVEL_1 && (
					<group
						ref={allRefs["portfolio"]}
						name="portfolio"
						position-y={SCENE.GROUND_LEVEL}
					>
						<Suspense fallback={null}>
							<PortfolioScene />
						</Suspense>
					</group>
				)}
				{currentLevel === SCENE.LEVEL_2 && (
					<group
						ref={allRefs["dataviz"]}
						name="dataviz"
						position-y={SCENE.GROUND_LEVEL}
					>
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
