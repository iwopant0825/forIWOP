import {
  Box,
  MeshTransmissionMaterial,
  OrbitControls,
  Plane,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import { Whale } from "./Whale";
import { useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Noise,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Scene({ sceneAn = 0 }) {
  const { viewport } = useThree();
  if (viewport && viewport.width > 6) {
    useFrame(({ mouse, camera }) => {
      camera.position.x = THREE.MathUtils.lerp(
        camera.position.x,
        mouse.x * 1,
        0.03
      );
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        mouse.y * 1,
        0.01
      );
      camera.position.z = THREE.MathUtils.lerp(
        camera.position.z,
        Math.max(4, Math.abs(mouse.x * mouse.y * 4)),
        0.01
      );
      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        mouse.x * -Math.PI * 0.025,
        0.001
      );
    });
  }

  const IwopWhale = useSpring({
    rotation:
      sceneAn > 1.6 && sceneAn < 3
        ? [0.4, -0.9, 0]
        // : sceneAn >= 3 && sceneAn < 5
        // ? [-1.6,-0.3,-2]
        : [0.4, -0.9, 0], // <----sceneAn==1

    position:
      sceneAn > 1.1 && sceneAn <= 100
        ? [-30, -5.2, 0]
        // : sceneAn >= 3 && sceneAn < 5
        // ? [-1.3, 0, 0]
        : [0, -1.2, 0], // <----sceneAn==1

    config: { tension: 20 }, // 애니메이션 속도 조절
  });

  return (
    <>
      <animated.mesh
        rotation={IwopWhale.rotation}
        position={IwopWhale.position}
      >
        <Whale />
      </animated.mesh>
    </>
  );
}
