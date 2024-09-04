"use client"; // This line ensures the component is treated as a client-side component

import { useState, useEffect } from 'react';
import { useBox } from '@react-three/cannon';
import FrontWheel from './FrontWheel';
import BackWheel from './BackWheel';
import Body from './Body';
import FallingShapes from './FallingShapes';

function Vehicle() {
  const [position, setPosition] = useState([0, 0.5, 0]);
  const [rotation, setRotation] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [vehicleRef] = useBox(() => ({
    mass: 1,
    position: [position[0], position[1], position[2]],
    rotation: [0, rotation, 0],
    onCollide: (e) => {
      console.log('Vehicle collided with', e.body);
      setGameOver(true);
    }
  }));

  if (gameOver) {
    return <div>Game Over!</div>;
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'w':
          setPosition(prev => [prev[0] + Math.sin(rotation), prev[1], prev[2] - Math.cos(rotation)]);
          break;
        case 's':
          setPosition(prev => [prev[0] - Math.sin(rotation), prev[1], prev[2] + Math.cos(rotation)]);
          break;
        default:
          break;
      }
    };

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setRotation(Math.atan2(x, y));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [rotation]);

  return (
    <>
      <Body ref={vehicleRef} />
      <FrontWheel position={[position[0], position[1] + 0.5, position[2] + 1]} />
      <BackWheel position={[position[0] - 1, position[1] + 0.5, position[2] - 1]} />
      <BackWheel position={[position[0] + 1, position[1] + 0.5, position[2] - 1]} />
    </>
  );
}

export default Vehicle;
