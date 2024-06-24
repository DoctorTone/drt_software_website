import React, { Suspense, useRef } from "react";
import { Instances } from "@react-three/drei";
import { WireCube } from "./WireCube";
import useStore from "../state/store";

const Landing = () => {
  const cubeData = useStore((state) => state.cubeData);

  return (
    <>
      <Instances
        limit={50} // Optional: max amount of items (for calculating buffer size)
        range={10}
      >
        <boxGeometry />
        <meshStandardMaterial wireframe={true} color={"lightgreen"} />
        {cubeData.map((data, i) => (
          <WireCube key={i} />
        ))}
      </Instances>
    </>
  );
};

export default Landing;
