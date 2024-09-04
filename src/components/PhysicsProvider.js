import React from 'react';
import { Physics } from '@react-three/cannon';

const PhysicsProvider = ({ children }) => {
  return (
    <Physics gravity={[0, -9.8, 0]}>
      {children}
    </Physics>
  );
};

export default PhysicsProvider;
