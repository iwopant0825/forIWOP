/* eslint-disable react/no-unknown-property */
import { Box, Plane, Scroll } from "@react-three/drei";
import Test3D from "./Over3D/Test";
import { useThree } from "@react-three/fiber";
import IwopText from "./Over3D/IwopText";
import { Whale } from "./Whale";

export default function Over3D({scrollTest}) {
  const { viewport } = useThree();
  return (
    <Scroll>
      <group position={[0, 0, 0]}>
        <IwopText scrollTest={scrollTest} position={[0, 0, -5]}/>
      </group>
      <group position={[0, -viewport.height, 0]}>

      </group>
      <group position={[0, -viewport.height * 2.8, 0]}>
        <Whale position={[-1.3,0,0]} rotation={[-1.6,-0.3,-2]}/>
      </group>
    </Scroll>
  );
}
