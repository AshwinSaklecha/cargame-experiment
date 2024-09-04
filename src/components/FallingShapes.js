"use client"; // Ensure client-side rendering

import React, { useRef, useEffect } from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

function FallingShapes() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shape = {
        id: Math.random(),
        position: [Math.random() * 10 - 5, 10, Math.random() * 10 - 5],
        size: Math.random() * 2 + 0.5,
      };
      setShapes(prevShapes => [...prevShapes, shape]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {shapes.map(shape => (
        <Shape key={shape.id} position={shape.position} size={shape.size} />
      ))}
    </>
  );
}

function Shape({ position, size }) {
  const [ref, api] = useBox(() => ({
    mass: size,
    position,
    onCollide: (e) => {
      console.log('Collision detected with', e.body);
      // Handle collision logic here, e.g., end the game
    }
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default FallingShapes;
