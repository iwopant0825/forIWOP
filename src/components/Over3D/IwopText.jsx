import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function IwopText({ position, scrollTest }) {
  const { viewport } = useThree();
  return (
    <Text
      position={position}
      color={'#000000'}
      fontSize={(viewport.width > 6 ? viewport.width / 1.6 : viewport.width / 1.4) / (scrollTest + 0.1)}
      anchorX="center"
      anchorY="middle"
      material-opacity={1 - Math.min(Math.max((scrollTest - 1) / 0.4, 0), 1)} // 서서히 투명해지게 설정
    >
      IWOP
    </Text>
  );
}
