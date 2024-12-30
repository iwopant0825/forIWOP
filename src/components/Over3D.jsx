/* eslint-disable react/no-unknown-property */
import { Box, Plane, Scroll } from "@react-three/drei";
import Test3D from "./Over3D/Test";
import { useThree } from "@react-three/fiber";
import IwopText from "./Over3D/IwopText";
import { Whale } from "./Whale";

export default function Over3D({ scrollTest }) {
  const { viewport } = useThree();
  console.log( viewport.width);
  return (
    <Scroll>
      <group position={[0, 0, 0]}>
        <IwopText scrollTest={scrollTest} position={[0, 0, -5]} />
      </group>
      <group position={[0, -viewport.height, 0]}></group>
      <group
        position={
          viewport.width > 8
            ? [0, -viewport.height * 2.9, 0]
            : viewport.width > 6
            ? [0, -viewport.height * 2.3, 0]
            : [0, -viewport.height * 2.1, 0]
        }
      >
        <Whale
          position={
            viewport.width > 6
              ? [-viewport.width * 0.1, 0, 0]
              : [-viewport.width * 0.2, 0, 0]
          }
          rotation={[-1.6, -0.3, -2]}
        />
      </group>
    </Scroll>
  );
}
