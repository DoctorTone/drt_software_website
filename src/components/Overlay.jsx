import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Overlay = ({ fade, ...props }) => {
	const matRef = useRef();
	const triggerRef = useRef(false);

	if (fade) {
		triggerRef.current = true;
	}

	let fadeDirection = 1;
	useFrame((state, delta) => {
		if (triggerRef.current) {
			matRef.current.opacity += delta * fadeDirection;
			if (matRef.current.opacity >= 1) {
				fadeDirection = -1;
			}
			if (matRef.current.opacity < 0) {
				matRef.current.opacity = 0;
				triggerRef.current = false;
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
