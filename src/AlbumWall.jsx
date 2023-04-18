import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useState } from "react";
import { TextureLoader } from "three";

function AlbumWall() {
  const [it, setIt] = useState(true);
  const pathImg = it ? "/static/univalleLogo.png" : "/static/plazoleta.jpg";
  const colorMap = useLoader(TextureLoader, pathImg);
  console.log({ pathImg });
  return (
    <mesh
      position={[2, 1.5, -1]}
      rotation-y={-(Math.PI / 2) * 0.2}
      onPointerEnter={() => setIt(!it)}
    >
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial map={colorMap} color="gray" />
      <Html>
        <h1 style={{ color: "white" }}>Hover me</h1>
      </Html>
    </mesh>
  );
}

export default AlbumWall;
