import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = (props) => {
  const { nodes, materials } = useGLTF("/models/anjal.glb");
  const groupRef = useRef();
  const [scale, setScale] = useState(0.15);
  const [direction, setDirection] = useState(1);

  useFrame(() => {
    if (scale >= 0.15) setDirection(-1);
    if (scale <= 0.13) setDirection(1);
    setScale((prev) => prev + direction * 0.0004);
    groupRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[3.14 / 2, -0.4, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO.geometry}
          material={materials.logo}
          position={[-0.142, 0.72, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO_1.geometry}
          material={materials.logo_1}
          position={[1.481, 0.558, 0.622]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/anjal.glb");
export default Cube;
