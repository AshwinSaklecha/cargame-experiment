import { Sphere } from '@react-three/drei';

function FrontWheel() {
  return (
    <Sphere args={[0.5, 32, 32]} position={[0, 0.5, 1]}>
      <meshStandardMaterial attach="material" color="lightpink" />
    </Sphere>
  );
}

export default FrontWheel;
