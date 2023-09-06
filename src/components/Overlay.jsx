import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Overlay = ({ fade, ...props }) => {
	const matRef = useRef();

	let fadeDirection = 1;
	useFrame((state, delta) => {
		if (fade) {
			matRef.current.opacity += delta * fadeDirection;
			if (matRef.current.opacity >= 1) {
				fadeDirection = -1;
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
