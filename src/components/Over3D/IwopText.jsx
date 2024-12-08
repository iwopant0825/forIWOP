import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function IwopText({ position }) {
  const { viewport } = useThree();
  return (
    <Text
      position={position}
      color={'#000000'}
      fontSize={viewport.width > 6 ? viewport.width / 2 : viewport.width / 1.4}
      anchorX="center"
      anchorY="middle"
    >
      IWOP
    </Text>
  );
}
