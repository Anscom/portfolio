"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function GameBoy(props) {
  const { nodes, materials } = useGLTF('/model/gameboy_pokemon.glb')

  const modelRef = useRef();
  
  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group {...props} dispose={null} ref={modelRef} position={[0.2,0,0]} >
      <mesh
        name="Object_2"
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/model/gameboy_pokemon.glb')