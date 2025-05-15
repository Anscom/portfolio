
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function MainCharacter(props) {
  const { nodes, materials } = useGLTF('/model/pokemon_sudowoodo.glb')

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.7 + Math.sin(state.clock.elapsedTime) * 0.15;
  })

  return (
    <group {...props} dispose={null} ref={modelRef} position={[0,-1.7,0]} scale={[2.3, 2.3,2.3]} rotation={[0.3,-0.4,0]}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.27}>
        <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Cube_033_2_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube_033_2_0.geometry}
            material={materials.Cube_033}
            scale={1.048}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model/pokemon_sudowoodo.glb')