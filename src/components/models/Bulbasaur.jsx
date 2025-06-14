"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function Bulbasaur(props) {
  const { nodes, materials } = useGLTF('/model/bulbasaur_pokemon.glb')

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  
  return (
    <group {...props} dispose={null} ref={modelRef} rotation={[0,0,0]}>
      <group name="bulbasaur_grp" position={[0, -0.3, 0]} rotation={[0.2, -Math.PI / 2, 0]} scale={[0.5, 0.5, 0.5]}>
        <group
          name="garlic_grp"
          position={[1.396, 0.074, 0.187]}
          rotation={[0, 0, 0.309]}
          scale={[1.04, 1.055, 1.04]}>
          <mesh
            name="garlic1_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.garlic1_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
          />
          <mesh
            name="garlic2_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.garlic2_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
          />
          <mesh
            name="garlic3_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.garlic3_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
          />
          <mesh
            name="garlic4_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.garlic4_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
            position={[8.277, 0.746, 1.972]}
            rotation={[0, -Math.PI / 6, 0]}
          />
          <mesh
            name="garlic5_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.garlic5_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
            position={[5.613, 0.746, -7.035]}
            rotation={[0, Math.PI / 6, 0]}
          />
          <mesh
            name="garlic6_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.garlic6_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
          />
        </group>
        <group name="skin_grp" position={[0.009, -0.02, 0]}>
          <mesh
            name="skin1_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.skin1_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
            position={[2.894, 2.94, -1.592]}
            rotation={[-0.284, -0.27, -1.038]}
            scale={0.554}
          />
          <mesh
            name="skin2_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.skin2_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
            position={[3.297, 1.824, -0.162]}
            rotation={[-1.965, -0.508, -1.487]}
            scale={0.284}
          />
          <mesh
            name="skin3_geo_M_bulbasaur_0"
            castShadow
            receiveShadow
            geometry={nodes.skin3_geo_M_bulbasaur_0.geometry}
            material={materials.M_bulbasaur}
            position={[3.337, 2.022, 0.147]}
            rotation={[-1.965, -0.508, -1.911]}
            scale={0.284}
          />
        </group>
        <mesh
          name="pCube3_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube3_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube15_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube15_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube23_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube23_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube34_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube34_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube38_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube38_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube39_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube39_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube5_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube5_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube7_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube7_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube24_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube24_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube35_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube35_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube36_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube36_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="pCube37_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.pCube37_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
        />
        <mesh
          name="body_geo4_M_bulbasaur_0"
          castShadow
          receiveShadow
          geometry={nodes.body_geo4_M_bulbasaur_0.geometry}
          material={materials.M_bulbasaur}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/bulbasaur_pokemon.glb')