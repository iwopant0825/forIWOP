import {
  Box,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import ScrollManager from "./components/ScrollManager";
import Scene from "./components/Scene";
import Over from "./components/Over";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import styled from "styled-components";
import OverHeader from "./components/Header";
import Over3D from "./components/Over3D";
import Loading from "./components/Loading";


export default function App() {
  const [sceneAn, setSceneAn] = useState(1)
  const [scrollTest, setScrollTest] = useState(0)
  const positionset = [1,-1,3]
  return (
    <Suspense fallback={<Loading/>}>
    <Layout>
      <OverHeader scrollTest={scrollTest}/>
      <Canvas style={{ position: "absolute" }}>
        <color attach="background" args={["#efeff4"]} />
        <Scene sceneAn={sceneAn}/>
        <directionalLight position={positionset} intensity={12}/>
        {/* <Box scale={0.2} position={positionset}/> */}
        <ambientLight intensity={0.3}/>
        <ScrollControls pages={5} damping={0.3}>
          <ScrollManager />
          <Scroll html style={{ width: "100%",zIndex:10  }}>
            <Over setScrollTest={setScrollTest} setSceneAn={setSceneAn}/>
          </Scroll>
          <Over3D/>
        </ScrollControls>
        
      </Canvas>
    </Layout>
    </Suspense>
  );
}

const Layout = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;