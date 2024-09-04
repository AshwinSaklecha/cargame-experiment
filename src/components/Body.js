import { Box } from '@react-three/drei';

function Body() {
  return (
    <Box args={[1.5, 0.5, 0.5]} position={[0, 0.75, 0]}>
      <meshStandardMaterial attach="material" color="lightgreen" />
    </Box>
  );
}

export default Body;
