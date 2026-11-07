'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural Points on Sphere representing the Earth's data grid
function EarthDataPoints({ count = 1200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyanColor = new THREE.Color('#22D3EE');
    const goldColor = new THREE.Color('#F5B731');
    const blueColor = new THREE.Color('#0E3A7A');

    for (let i = 0; i < count; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 2.4 + (Math.random() * 0.08 - 0.04);

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color distribution: mostly cyan & deep blue, with golden accent clusters
      const isGold = Math.random() < 0.14;
      const c = isGold ? goldColor : Math.random() < 0.7 ? cyanColor : blueColor;

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Glowing Orbit Rings around the globe
function OrbitRings() {
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.15;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.09;
  });

  return (
    <>
      {/* Primary Ring */}
      <group ref={ring1Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <mesh>
          <ringGeometry args={[3.2, 3.22, 64]} />
          <meshBasicMaterial
            color="#22D3EE"
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Secondary Golden Ring */}
      <group ref={ring2Ref} rotation={[-Math.PI / 4, -Math.PI / 3, 0]}>
        <mesh>
          <ringGeometry args={[3.5, 3.515, 64]} />
          <meshBasicMaterial
            color="#F5B731"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </>
  );
}

// 3 Connected Facility Nodes (Campus, Industry, Commercial) with pulsing arcs
function FacilityNetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  // Facility coordinates on the globe
  const nodes = useMemo(
    () => [
      { name: 'Campus', pos: new THREE.Vector3(1.4, 1.3, 1.4), color: '#22D3EE' },
      { name: 'Industrial', pos: new THREE.Vector3(-1.6, 0.4, 1.7), color: '#F5B731' },
      { name: 'Commercial', pos: new THREE.Vector3(0.3, -1.8, 1.5), color: '#10B981' },
    ],
    []
  );

  // Curved lines connecting the 3 facilities
  const curvePoints = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      const start = nodes[i].pos;
      const end = nodes[(i + 1) % nodes.length].pos;
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.7);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      lines.push(curve.getPoints(24));
    }
    return lines;
  }, [nodes]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Facility Beacon Points */}
      {nodes.map((node, i) => (
        <group key={i} position={node.pos}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color={node.color} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.3}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}

      {/* Connection Energy Arcs */}
      {curvePoints.map((pts, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(pts);
        return (
          <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: i === 1 ? '#F5B731' : '#22D3EE',
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
          }))} />
        );
      })}
    </group>
  );
}

// Inner glowing atmosphere sphere
function AtmosphereSphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.36, 48, 48]} />
      <meshBasicMaterial
        color="#081C44"
        transparent
        opacity={0.88}
      />
    </mesh>
  );
}

// Scene Root with gentle mouse tracking and scroll offset
function SceneContent() {
  const sceneGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!sceneGroup.current) return;
    // Parallax mouse follow
    const targetX = (state.pointer.x * 0.3);
    const targetY = (state.pointer.y * 0.2);
    sceneGroup.current.rotation.y = THREE.MathUtils.lerp(sceneGroup.current.rotation.y, targetX, 0.05);
    sceneGroup.current.rotation.x = THREE.MathUtils.lerp(sceneGroup.current.rotation.x, -targetY, 0.05);
  });

  return (
    <group ref={sceneGroup} position={[0, 0, 0]}>
      <AtmosphereSphere />
      <EarthDataPoints count={1400} />
      <FacilityNetworkNodes />
      <OrbitRings />
    </group>
  );
}

// Main Component with WebGL support check and fallback
export default function HeroGlobeScene() {
  const [hasMounted, setHasMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setHasMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!hasMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-space-950">
        <div className="w-64 h-64 rounded-full border border-cyan-500/20 animate-pulse bg-radial-cyan" />
      </div>
    );
  }

  if (!webglSupported) {
    // Elegant 2D Fallback if WebGL disabled
    return (
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full border border-cyan-400/30 bg-radial-space shadow-cyan-glow-md flex items-center justify-center">
          <div className="w-72 h-72 rounded-full border border-gold-energy/30 animate-spin" style={{ animationDuration: '30s' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22D3EE" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#F5B731" />
        <SceneContent />
      </Canvas>
    </div>
  );
}
