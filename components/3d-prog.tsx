"use client";

import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

function ChessBoard() {
  const boardRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (boardRef.current) {
      boardRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const squares = [];
  const boardSize = 8;
  const squareSize = 1;

  for (let x = 0; x < boardSize; x++) {
    for (let z = 0; z < boardSize; z++) {
      const isBlack = (x + z) % 2 === 1;
      squares.push(
        <mesh
          key={`${x}-${z}`}
          position={[
            (x - boardSize / 2) * squareSize + squareSize / 2,
            -2,
            (z - boardSize / 2) * squareSize + squareSize / 2,
          ]}
        >
          <boxGeometry args={[squareSize, 0.1, squareSize]} />
          <meshStandardMaterial color={isBlack ? "#2c2c2c" : "#f0f0f0"} />
        </mesh>
      );
    }
  }

  return <group ref={boardRef}>{squares}</group>;
}

function RotatingTomasText() {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      textRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <group ref={textRef}>
      <Text
        fontSize={1.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/Geist-Bold.ttf"
        position={[0, 0, 0]}
      >
        TOMAS
        <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
      </Text>
    </group>
  );
}

export function Tomas3DBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 5, 8], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.5}
            color="#4f46e5"
          />

          <ChessBoard />
          <RotatingTomasText />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
