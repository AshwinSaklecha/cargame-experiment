import { Cylinder } from '@react-three/drei';

function BackWheel({ position }) {
  return (
    <Cylinder args={[0.25, 0.25, 0.1]} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial attach="material" color="lightpink" />
    </Cylinder>
  );
}

export default BackWheel;
