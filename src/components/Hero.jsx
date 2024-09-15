import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Hero.css";
import TypingEffect from "./TypingEffect";

function Model() {
  const { scene, animations } = useGLTF("/models/scene.gltf");
  const mixer = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Memoize textures so they are only loaded once
  const textures = useMemo(() => {
    const textureLoader = new THREE.TextureLoader();
    return {
      engineTexture: textureLoader.load("/models/textures/ENGINE_baseColor.jpeg"),
      leatherTexture: textureLoader.load("/models/textures/leather_baseColor.jpg"),
      meshMatTexture: textureLoader.load("/models/textures/MESH_MAT_baseColor.jpeg"),
    };
  }, []);

  // Apply textures once when the component mounts
  useEffect(() => {
    const { engineTexture, leatherTexture, meshMatTexture } = textures;

    scene.traverse((node) => {
      if (node.isMesh) {
        if (node.material.name === "ENGINE_MAT") {
          node.material.map = engineTexture;
        } else if (node.material.name === "LEATHER_MAT") {
          node.material.map = leatherTexture;
        } else if (node.material.name === "MESH_MAT") {
          node.material.map = meshMatTexture;
        }

        if (node.material.map) {
          node.material.map.encoding = THREE.sRGBEncoding;
        }

        node.material.needsUpdate = true;
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }

    // Initial rotation setup
    scene.rotation.set(0.5, 0.1, 0);
  }, [scene, animations, textures]);

  // Handle mouse movement and update rotation based on mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalize between -1 and 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Inverted for correct orientation

      // Adjust rotation based on mouse position
      const rotationX = mouseY * Math.PI * 0.1; // Rotate vertically
      const rotationY = mouseX * Math.PI * 0.5; // Rotate horizontally

      setRotation({ x: rotationX, y: rotationY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update rotation on every frame
  useFrame(() => {
    scene.rotation.x = rotation.x;
    scene.rotation.y = rotation.y;
    mixer.current?.update(); // Keep animations running if any
  });

  return <primitive object={scene} scale={0.25} />;
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero-heading">
        <h1>International Innovation Challenge</h1>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Get Ready to{" "}
            <br />
            <span className="typing-effect">
              <TypingEffect />
            </span>
          </h1>
          <br />

          <div className="hero-cta-btn">
            Register Now
          </div>
          <h2>Powered by MUJ</h2>
          <h2>Language Partner MUJ</h2>
          <h2>Technical Partner MUJ</h2>
        </div>
        <div className="hero-right">
          <Canvas camera={{ position: [0, 5, 5], fov: 35 }} shadows>
            <ambientLight intensity={5} />
            <directionalLight position={[10, 10, 5]} intensity={5} castShadow />
            <Model />
            <OrbitControls enableZoom={false} autoRotate={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Hero;