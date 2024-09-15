import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Hero.css";
import TypingEffect from "./TypingEffect";

function Model() {
  const { scene, animations } = useGLTF("/models/scene.gltf");
  const mixer = useRef();
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 }); // Target rotation based on mouse
  const currentRotation = useRef({ x: 0, y: 0 }); // Track current rotation for lerping
  const [isRotating, setIsRotating] = useState(true); // Control rotation
  const [isAnimationPaused, setIsAnimationPaused] = useState(true); // Control animation

  // Debounce variables
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const debounceTimeout = useRef(null);

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

    scene.rotation.set(0.5, 0.1, 0); // Initial rotation setup
  }, [scene, animations, textures]);

  // Handle mouse movement and set target rotation based on mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isRotating) return;

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalize between -1 and 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Inverted for correct orientation

      // Only update if the mouse has moved significantly to prevent too many updates
      if (
        Math.abs(mouseX - lastMouseX.current) > 0.01 ||
        Math.abs(mouseY - lastMouseY.current) > 0.01
      ) {
        lastMouseX.current = mouseX;
        lastMouseY.current = mouseY;

        // Debounce the rotation update to avoid excessive re-rendering
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
          const targetX = -mouseY * Math.PI * 0.1; // Rotate vertically (reverse the direction)
          const targetY = mouseX * Math.PI * 0.5; // Rotate horizontally

          setTargetRotation({ x: targetX, y: targetY });
        }, 15); // Update every 50ms
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(debounceTimeout.current);
    };
  }, [isRotating]);

  // UseFrame to lerp between current and target rotation
  useFrame((_, delta) => {
    if (isRotating) {
      // Lerp to smoothen the rotation
      currentRotation.current.x = THREE.MathUtils.lerp(
        currentRotation.current.x,
        targetRotation.x,
        0.1 // Adjust this factor to control the delay speed
      );
      currentRotation.current.y = THREE.MathUtils.lerp(
        currentRotation.current.y,
        targetRotation.y,
        0.1 // Adjust this factor to control the delay speed
      );

      scene.rotation.x = currentRotation.current.x;
      scene.rotation.y = currentRotation.current.y;
    }

    // Only update the animation mixer if the animation is not paused
    if (mixer.current && !isAnimationPaused) {
      mixer.current.update(delta); // Keep animations running if not paused
    }
  });

  return (
    <primitive
      object={scene}
      scale={0.25}
      onClick={() => setIsAnimationPaused(!isAnimationPaused)} // Toggle animation on click
    />
  );
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
          {/* <h6>Powered by MUJ</h6>
          <h6>Language Partner MUJ</h6>
          <h6>Technical Partner MUJ</h6> */}
        </div>
        <div className="hero-right">
          <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
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
