/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TreePoints({ showPoints, ...props }) {
	const { nodes, materials } = useGLTF("./models/tree.gltf");
	const geom = nodes["tree-spruce"].geometry;
	return (
		<group {...props} dispose={null}>
			{showPoints ? (
				<points args={[geom]}>
					<pointsMaterial color="green" size={0.025} />
				</points>
			) : (
				<mesh geometry={geom} material={materials.color_main} />
			)}
		</group>
	);
}

useGLTF.preload("./models/tree.gltf");
