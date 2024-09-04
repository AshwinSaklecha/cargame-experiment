"use client"; // Ensure that the page itself is treated as a client-side component

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon'; // Import Physics provider
import Vehicle from '../components/Vehicle'; // Adjust the path based on your directory structure

const Page = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Physics>
        <Vehicle />
      </Physics>
    </Canvas>
  );
};

export default Page;
