import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Hero.css";

// Function to load textures and apply them to the jet model
function Model() {
  const { scene, animations } = useGLTF("/models/scene.gltf"); // Load the GLTF model
  const mixer = useRef();
  const textureLoader = new THREE.TextureLoader();

  useEffect(() => {
    // Load the textures from the folder
    const engineTexture = textureLoader.load("/models/textures/ENGINE_baseColor.jpeg");
    const leatherTexture = textureLoader.load("/models/textures/leather_baseColor.jpeg");
    const meshMatTexture = textureLoader.load("/models/textures/MESH_MAT_baseColor.jpeg");

    // Create an AnimationMixer if there are animations
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }

    // Traverse the scene to apply the textures to the correct materials
    scene.traverse((node) => {
      if (node.isMesh) {
        // Assign textures based on the material name
        if (node.material.name === "ENGINE_MAT") {
          node.material.map = engineTexture; // Apply the engine texture
        } else if (node.material.name === "LEATHER_MAT") {
          node.material.map = leatherTexture; // Apply the leather texture
        } else if (node.material.name === "MESH_MAT") {
          node.material.map = meshMatTexture; // Apply the mesh material texture
        }

        // Ensure the material uses sRGB encoding for correct color rendering
        if (node.material.map) {
          node.material.map.encoding = THREE.sRGBEncoding;
        }
        
        node.material.needsUpdate = true; // Ensure material updates

        // Enable shadow casting and receiving for realism
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
  }, [scene, animations, textureLoader]);

  // Use the AnimationMixer to update animations in the scene
  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} scale={0.25} />;
}

function Hero() {
  return (
    <>
    <div className="hero">
    <div className="hero-heading">
        <h1>International Innovation Challenge</h1>
    </div>
    <div className="hero-content">
    <div className="hero-left">
        <h1>Get Ready to <span>HACK</span></h1>
        <h2>Powered by MUJ</h2>
        <h2>Language Partner MUJ</h2>
        <h2>Technical Partner MUJ</h2>
    </div>
    <div className="hero-right">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
        {/* Ambient Light */}
        <ambientLight intensity={0.5} />

        {/* Directional Light with shadow casting */}
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

        {/* Load and Render the Model */}
        <Model />

        {/* Orbit controls for interactivity */}
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Rest of the homepage content */}
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
        {/* Your homepage content */}
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Hero;