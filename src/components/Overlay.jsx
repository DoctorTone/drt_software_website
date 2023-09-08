import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../state/store";
const Overlay = ({ fade, ...props }) => {
	const matRef = useRef();
	const triggerRef = useRef(false);

	const setOverlayFaded = useStore((state) => state.setOverlayFaded);
	const setFadeOverlay = useStore((state) => state.setFadeOverlay);

	triggerRef.current = false;
	if (fade !== 0) {
		triggerRef.current = true;
	}

	useFrame((state, delta) => {
		if (triggerRef.current) {
			// DEBUG
			console.log("Fading", fade);
			matRef.current.opacity += delta * fade;
			if (matRef.current.opacity >= 1) {
				matRef.current.opacity = 1;
				triggerRef.current = false;
				// Signal we have faded out
				setFadeOverlay(0);
				setOverlayFaded(true);
			}

			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 0;
				triggerRef.current = false;
				// No more fading
				setFadeOverlay(0);
			}
		}
	});

	return (
		<mesh {...props}>
			<planeGeometry args={[1000, 1000]} />
			<meshBasicMaterial
				ref={matRef}
				color={0x454545}
				transparent={true}
				opacity={0}
			/>
		</mesh>
	);
};

export default Overlay;
