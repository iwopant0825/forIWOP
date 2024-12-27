/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/whale.glb -o ./src/components/Whale.jsx 
*/

import React, { useEffect } from 'react'
import { useFrame, useGraph, useThree } from '@react-three/fiber' // useFrame 추가
import { useGLTF, useAnimations, MeshTransmissionMaterial } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Whale(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/whale.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const { viewport } = useThree()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.position.y = Math.sin(t) * 0.1 // 위아래로 움직이게 설정
  })

  useEffect(() => {
      actions['swim.002'].play()
      actions['swim.002'].timeScale = 1.2 // 애니메이션 속도 1.2배로 설정
  }, [actions])
  return (
    <group scale={viewport.width>6? viewport.width/57:viewport.width/25} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="아마튜어" position={[0, 6.024, 0]} rotation={[0, -0.014, 0]}>
          <primitive object={nodes.what} />
          <primitive object={nodes.Bone} />
          <group name="Cube">
            <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} skeleton={nodes.Cube001.skeleton}>
            <MeshTransmissionMaterial 
                  color={'#007e2c'} // 재질의 색상
                  backside={true} // 재질의 뒷면을 렌더링할지 여부
                  thickness={0.3} // 재질의 두께
                  roughness={0.3} // 재질의 거칠기
                  transmission={0} // 빛의 투과율
                  ior={1.5} // 굴절률 (Index of Refraction)
                  chromaticAberration={0.3} // 색수차 (Chromatic Aberration)
                  opacity={0.95} 
                  transparent={true} // 불투명도 적용을 위한 속성
                />
            </skinnedMesh>
            <skinnedMesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} skeleton={nodes.Cube001_1.skeleton}>
              <MeshTransmissionMaterial 
                  color={'#0189eb'} // 재질의 색상
                  backside={true} // 재질의 뒷면 렌더링할지 여부
                  thickness={0.3} // 재질의 두께
                  roughness={0.3} // 재질의 거칠기
                  transmission={0} // 빛의 투과율
                  ior={2.5} // 굴절률 (Index of Refraction)
                  chromaticAberration={0.3} // 색수차 (Chromatic Aberration)
                  opacity={0.7} 
                  transparent={true} // 불투명도 적용을 위한 속성
                />
            </skinnedMesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/whale.glb')
