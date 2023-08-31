import React from "react";
import { useGLTF } from "@react-three/drei";
import { Points } from "@react-three/drei";

export const DRTPoints = (props) => {
	const { nodes, materials } = useGLTF("./models/tree.gltf");
	const geom = nodes["tree-spruce"].geometry;
	return (
		<group {...props} dispose={null}>
			<points args={[geom]}>
				<pointsMaterial color="green" size={0.025} />
			</points>
		</group>
	);
};

useGLTF.preload("./models/tree.gltf");
