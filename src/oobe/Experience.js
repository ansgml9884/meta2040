import { Canvas, Mesh } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./freestyle-experience.css";
import { App } from "./freestyle-experience.js";

function Experience() {
  const urlSearch = window.location.search;
  const searchParams = new URLSearchParams(urlSearch);

  useEffect(() => {
    if (searchParams.get("needReload")) {
      window.location.href = window.location.origin + window.location.pathname;
    }
  });

  return (
    <div id="Experience_page" style={{ minHeight: "100vh" }}>
      <div id="webgl-container"></div>
      {/* <Canvas>
        <OrbitControls />
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attatch="geometry" />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
      </Canvas> */}
    </div>
  );
}

export default Experience;
