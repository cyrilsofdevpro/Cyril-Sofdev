"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededNoise(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453123;
  return x - Math.floor(x);
}

function Particles({ count = 260 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (seededNoise(i + 1) - 0.5) * 16;
      arr[i * 3 + 1] = (seededNoise(i + 2) - 0.5) * 10;
      arr[i * 3 + 2] = (seededNoise(i + 3) - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.015;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;

    // gentle parallax toward pointer
    mouse.current.x = state.pointer.x;
    mouse.current.y = state.pointer.y;
    pointsRef.current.position.x += (mouse.current.x * 0.4 - pointsRef.current.position.x) * 0.02;
    pointsRef.current.position.y += (mouse.current.y * 0.25 - pointsRef.current.position.y) * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#4F8EF7"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.2]}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
