"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Blob({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    // Smoothly follow mouse — adds subtle parallax/cinematic camera feel without moving camera
    const target = group.current.rotation;
    target.x = THREE.MathUtils.damp(target.x, -mouse.current.y * 0.35, 4, delta);
    target.y = THREE.MathUtils.damp(target.y, mouse.current.x * 0.45, 4, delta);
    if (inner.current) {
      inner.current.rotation.x += delta * 0.08;
      inner.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={inner} castShadow receiveShadow>
          <icosahedronGeometry args={[1.35, 6]} />
          <MeshDistortMaterial
            color={"#6366F1"}
            roughness={0.15}
            metalness={0.6}
            distort={0.42}
            speed={1.6}
            envMapIntensity={1.1}
          />
        </mesh>
        {/* Inner glowing core */}
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#a78bfa" toneMapped={false} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
  }

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#c4b5fd" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const onPointerMove = (e: React.PointerEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouse.current.x = x;
    mouse.current.y = y;
  };

  return (
    <div className="absolute inset-0" onPointerMove={onPointerMove}>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} color="#8B5CF6" />
          <directionalLight position={[-4, -2, -3]} intensity={0.7} color="#22d3ee" />
          <Particles />
          <Blob mouse={mouse} />
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.35}
            scale={6}
            blur={2.4}
            far={3}
            color="#6366F1"
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
