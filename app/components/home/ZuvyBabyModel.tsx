"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Zuvy-baby-with-hair1";
import { Center, OrbitControls } from "@react-three/drei";

const ZuvyBabyModel = () => {
  return (
    <div className="w-full h-screen relative bg-gray-100/10">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        {/* <CameraController
          progress={progress}
          // setCameraPosition={setCameraPosition}
        /> */}

        <ambientLight intensity={2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color={"#ffffff"}
        />
        <directionalLight
          position={[0, 8, 0]}
          intensity={1}
          color={"#ffffff"}
        />
        <directionalLight
          position={[0, 0, -10]}
          intensity={4}
          color={"#ffffff"}
        />

        <Center>
          <Model />
        </Center>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ZuvyBabyModel;
