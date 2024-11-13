import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Target = (props) => {
  const { nodes, materials } = useGLTF("/models/ts.glb");
  const groupRef = useRef();
  const [up, setUp] = useState(true);
  const [rot, setRot] = useState(true);

  const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const pp = isMobile ? -10 : -13;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.y += up ? 0.01 : -0.01;
      groupRef.current.rotation.y += rot ? 0.008 : -0.008;
      groupRef.current.rotation.z += rot ? -0.0007 : +0.0007;
      groupRef.current.rotation.x += rot ? -0.0007 : +0.00007;
      if (groupRef.current.position.y > pp + 0.5) setUp(false);
      if (groupRef.current.position.y < pp) setUp(true);
      if (groupRef.current.position.y > pp + 0.5) setRot(false);
      if (groupRef.current.position.y < pp) setRot(true);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -0.6]} scale={0.01 * 20}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials["back.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO.geometry}
          material={materials["logo.001"]}
          position={[0.534, 0.644, 0.996]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/ts.glb");
export default Target;
