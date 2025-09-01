"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function FloatingTask({
  text,
  color,
  position,
}: {
  text: string;
  color: string;
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.15}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={3}
      >
        {text}
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.4} />
      </Text3D>
    </group>
  );
}

function TodoTitle() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <group ref={ref}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1.2}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2.2, 0, 0]}
      >
        TO-DO
        <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
      </Text3D>
    </group>
  );
}

export function Todo3DExperience() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 3, 7], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} />
          <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4f46e5" />

          {/* Center Title */}
          <TodoTitle />

          {/* Floating Tasks */}
          <FloatingTask
            text="✅ Buy groceries"
            color="#10b981"
            position={[-3, 1, -2]}
          />
          <FloatingTask
            text="📚 Study React"
            color="#f59e0b"
            position={[2, 2, -1]}
          />
          <FloatingTask
            text="💻 Build side project"
            color="#3b82f6"
            position={[1, -1, 1]}
          />
          <FloatingTask
            text="🧘 Exercise"
            color="#ef4444"
            position={[-2, -0.5, 2]}
          />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.7}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
