import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Hero.css";

function Model() {
  const { scene, animations } = useGLTF("/models/scene.gltf");
  const mixer = useRef();
  const textureLoader = new THREE.TextureLoader();

  useEffect(() => {
    const engineTexture = textureLoader.load(
      "/models/textures/ENGINE_baseColor.jpeg"
    );
    const leatherTexture = textureLoader.load(
      "/models/textures/leather_baseColor.jpg"
    );
    const meshMatTexture = textureLoader.load(
      "/models/textures/MESH_MAT_baseColor.jpeg"
    );

    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }

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

    scene.rotation.set(0.3, 0.5, 0);
  }, [scene, animations, textureLoader]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} scale={0.25} />;
}

function Hero() {
  const words = ["HACK", "INNOVATE","BUILD"]; // The words to cycle through
  const [displayedWord, setDisplayedWord] = useState(""); // Word currently being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting the word
  const [loopNum, setLoopNum] = useState(0); // Which word in the array we are on
  const [typingSpeed, setTypingSpeed] = useState(50); // Speed of typing/deleting

  const typingIntervalRef = useRef(null); // Reference to interval for clean-up

  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      if (isDeleting) {
        setDisplayedWord(currentWord.substring(0, displayedWord.length - 1));
        setTypingSpeed(50); // Speed up when deleting
      } else {
        setDisplayedWord(currentWord.substring(0, displayedWord.length + 1));
        setTypingSpeed(50); // Normal speed when typing
      }

      if (!isDeleting && displayedWord === currentWord) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedWord === "") {
        // Once fully deleted, move to the next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingIntervalRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingIntervalRef.current); // Clear the interval on cleanup
  }, [displayedWord, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div className="hero">
      <div className="hero-heading">
        <h1>International Innovation Challenge</h1>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Get Ready to <span className="typing-effect">{displayedWord}</span>
          </h1>
          <h2>Powered by MUJ</h2>
          <h2>Language Partner MUJ</h2>
          <h2>Technical Partner MUJ</h2>
        </div>
        <div className="hero-right">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
            <ambientLight intensity={5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
            />
            <Model />
            <OrbitControls
              enableZoom={true}
              autoRotate
              autoRotateSpeed={1.5}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Hero;
