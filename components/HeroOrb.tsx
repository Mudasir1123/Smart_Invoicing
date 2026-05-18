'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime
    // Smooth mouse-reactive rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y * 0.3 + Math.sin(t * 0.3) * 0.15,
      0.05
    )
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * 0.3 + t * 0.12,
      0.05
    )
  })

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow>
        <icosahedronGeometry args={[2.2, 4]} />
        <MeshDistortMaterial
          color="#1e9ad8"
          emissive="#0a3a5c"
          emissiveIntensity={0.6}
          metalness={0.85}
          roughness={0.1}
          distort={0.3}
          speed={3}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  )
}

function OrbitRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * speed
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.01, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

export function HeroOrb() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2}   color="#1e9ad8" />
      <pointLight position={[-8, -5, 5]} intensity={1.2}  color="#22d3ee" />
      <pointLight position={[0, -10, -5]} intensity={0.8} color="#10b981" />

      <FloatingGeometry />
      <OrbitRing radius={3.0} speed={0.4}  color="#1e9ad8" />
      <OrbitRing radius={3.8} speed={-0.25} color="#22d3ee" />
      <OrbitRing radius={4.6} speed={0.18} color="#10b981" />

      <Environment preset="city" />
    </Canvas>
  )
}
