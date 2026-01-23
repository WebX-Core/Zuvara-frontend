import React, { useEffect } from "react";
import { useAnimations, useFBX } from "@react-three/drei";

export function Model(props: React.ComponentProps<"group">) {
  const fbx = useFBX("/models/dancing-twerk-no-coat.fbx");
  const { actions } = useAnimations(fbx.animations, fbx);

  useEffect(() => {
    // Play the first animation found
    if (actions && fbx.animations.length > 0) {
      const actionName = fbx.animations[0].name;
      actions[actionName]?.reset().fadeIn(0.5).play();
    }
  }, [actions, fbx.animations]);

  return (
    <group {...props} dispose={null}>
      <primitive object={fbx} scale={0.01} />
    </group>
  );
}

useFBX.preload("/models/dancing-twerk-no-coat.fbx");
