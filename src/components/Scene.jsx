import { Box, MeshTransmissionMaterial, OrbitControls, Plane } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import { Whale } from "./Whale";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Noise, Outline, Select, Selection } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Scene({ sceneAn }) {
  const { viewport } = useThree()
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.1,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.1,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });
  const IwopWhale = useSpring({
    rotation:
      sceneAn == 2
        ? [0, 0, 0]
        : sceneAn == 3
        ? [0, 0, 0]
        : sceneAn == 4
        ? [0, 0, 0]
        : sceneAn == 5
        ? [0, 0, 0]
        : [0.4, -0.9, 0],// <----sceneAn==1
      
    position:
      sceneAn == 2
        ? [0, 0, 0]
        : sceneAn == 3
        ? [0, 0, 0]
        : sceneAn == 4
        ? [0, 0, 0]
        : sceneAn == 5
        ? [0, 0, 0]
        : [0, -1.2, 0],// <----sceneAn==1
  });

  return (
    <>
      <animated.mesh rotation={IwopWhale.rotation} position={IwopWhale.position}>
        <Whale/>
      </animated.mesh>
    </>
  );
}
