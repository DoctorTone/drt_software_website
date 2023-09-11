/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: manofsteambustion (https://sketchfab.com/manofsteambustion)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/vr-headset-low-poly-free-6e90cfef00d14fab8b0c510380481251
title: VR HEADSET | LOW POLY | FREE
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MATERIALS } from "../state/Config.js";

export function VR({ fade, ...props }) {
	const { nodes, materials } = useGLTF("./models/vr_headset.glb");
	const matRefs = { screen: useRef(), strap: useRef() };

	useFrame((state, delta) => {
		if (fade) {
			matRefs.screen.current.opacity -= delta;
			matRefs.strap.current.opacity -= delta;
			if (matRefs.screen.current.opacity < 0) {
				matRefs.screen.current.opacity = 1;
				matRefs.strap.current.opacity = 1;
			}
		}
	});

	return (
		<group {...props} dispose={null}>
			<group position={[-3.96, 0.04, -0.14]}>
				<mesh geometry={nodes.VR_Screen_aiStandardSurface1_0.geometry}>
					<meshLambertMaterial
						transparent={true}
						color={0xcc7306}
						ref={matRefs.screen}
					/>
				</mesh>
			</group>
			<mesh geometry={nodes.VR1_lambert17_0.geometry}>
				<meshLambertMaterial
					transparent={true}
					color={0x777777}
					ref={matRefs.strap}
				/>
			</mesh>
		</group>
	);
}

useGLTF.preload("./models/vr_headset.glb");
