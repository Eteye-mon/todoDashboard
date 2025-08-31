"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

interface TaskData {
  todo: number;
  inProgress: number;
  done: number;
}

interface ProgressBarProps {
  position: [number, number, number];
  height: number;
  color: string;
  label: string;
  count: number;
}

function ProgressBar({
  position,
  height,
  color,
  label,
  count,
}: ProgressBarProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.8]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Progress Bar */}
      <mesh ref={meshRef} position={[0, height / 2, 0]}>
        <boxGeometry args={[0.6, height, 0.6]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Floating Count */}
      <Text
        position={[0, height + 0.5, 0]}
        fontSize={0.3}
        color="#fff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        {count}
      </Text>

      {/* Label */}
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.2}
        color="#888"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Regular.json"
      >
        {label}
      </Text>
    </group>
  );
}

function FloatingParticles({ taskData }: { taskData: TaskData }) {
  const particlesRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const totalTasks = taskData.todo + taskData.inProgress + taskData.done;
    const particleCount = Math.min(totalTasks, 20);

    return Array.from({ length: particleCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        Math.random() * 4 + 1,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      color:
        i < taskData.done
          ? "#22c55e"
          : i < taskData.done + taskData.inProgress
          ? "#f97316"
          : "#ef4444",
      scale: Math.random() * 0.3 + 0.1,
    }));
  }, [taskData]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ taskData }: { taskData: TaskData }) {
  const maxHeight = 3;
  const todoHeight = (taskData.todo / 10) * maxHeight;
  const inProgressHeight = (taskData.inProgress / 10) * maxHeight;
  const doneHeight = (taskData.done / 10) * maxHeight;

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <ProgressBar
        position={[-2, 0, 0]}
        height={todoHeight}
        color="#ef4444"
        label="To Do"
        count={taskData.todo}
      />
      <ProgressBar
        position={[0, 0, 0]}
        height={inProgressHeight}
        color="#f97316"
        label="In Progress"
        count={taskData.inProgress}
      />
      <ProgressBar
        position={[2, 0, 0]}
        height={doneHeight}
        color="#22c55e"
        label="Done"
        count={taskData.done}
      />

      <FloatingParticles taskData={taskData} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

export function ProgressVisualization3D() {
  const taskData: TaskData = {
    todo: 4,
    inProgress: 4,
    done: 3,
  };

  const completionPercentage = Math.round(
    (taskData.done / (taskData.todo + taskData.inProgress + taskData.done)) *
      100
  );

  return (
    <div className="bg-card rounded-lg border p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-sm">Project Progress</h3>
        <span className="text-xs text-muted-foreground">
          {completionPercentage}% Complete
        </span>
      </div>

      <div className="h-48 w-full">
        <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
          <Scene taskData={taskData} />
        </Canvas>
      </div>

      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
          To Do: {taskData.todo}
        </span>
        <span className="flex items-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
          In Progress: {taskData.inProgress}
        </span>
        <span className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
          Done: {taskData.done}
        </span>
      </div>
    </div>
  );
}
