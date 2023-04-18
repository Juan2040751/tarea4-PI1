import { Html, useVideoTexture } from "@react-three/drei";
import React, { useState } from "react";

function VideoWall() {
  const [play, setPlay] = useState(false);

  const texture = useVideoTexture("/static/naturaleza.mp4", {
    muted: false,
    start: play,
    loop: false,
  });
  console.log({ play, texture });
  return (
    <mesh
      position={[-2, 1.5, -0.5]}
      rotation-y={(Math.PI / 2) * 0.4}
      onClick={(e) => {
        setPlay(!play);
      }}
    >
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial map={texture} toneMapped={false} color="gray" />
      {play ? null : (
        <Html>
          <h1 style={{ color: "white" }}>Click me</h1>
        </Html>
      )}
    </mesh>
  );
}

export default VideoWall;
