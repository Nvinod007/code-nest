"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import * as THREE from "three";

export default function Scene3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);
  const techObjects = useRef<THREE.Mesh[]>([]);

  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Track scroll progress
  useEffect(() => {
    return scrollYProgress.onChange(latest => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isMounted) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create Tech Stack Objects with BETTER POSITIONING
    const techStack = [
      { color: 0x61dafb, name: "React", position: [-4, 3, 0], shape: "sphere" },
      {
        color: 0x3178c6,
        name: "TypeScript",
        position: [4, 3, 0],
        shape: "cube",
      },
      {
        color: 0x68a063,
        name: "Node.js",
        position: [-4, 0, 0],
        shape: "cylinder",
      },
      {
        color: 0x4db33d,
        name: "MongoDB",
        position: [4, 0, 0],
        shape: "sphere",
      },
      {
        color: 0x000000,
        name: "Next.js",
        position: [0, 1.5, 0],
        shape: "cube",
      },
      {
        color: 0x06b6d4,
        name: "Tailwind",
        position: [-2, -2, 0],
        shape: "cylinder",
      },
      {
        color: 0xffca28,
        name: "Firebase",
        position: [2, -2, 0],
        shape: "sphere",
      },
    ];

    techStack.forEach((tech, index) => {
      let geometry;

      switch (tech.shape) {
        case "sphere":
          geometry = new THREE.SphereGeometry(0.8, 32, 32);
          break;
        case "cylinder":
          geometry = new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32);
          break;
        default:
          geometry = new THREE.BoxGeometry(1, 1, 1);
      }

      const material = new THREE.MeshLambertMaterial({
        color: tech.color,
        emissive: new THREE.Color(tech.color).multiplyScalar(0.2),
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(tech.position[0], tech.position[1], tech.position[2]);
      mesh.castShadow = true;

      // Store tech info for later use
      mesh.userData = {
        baseRotationSpeed: (Math.random() + 0.5) * 0.005,
        // MUCH SLOWER
        floatOffset: index * 0.5,

        name: tech.name,
        originalPosition: [...tech.position], // Different timing for each object
      };

      scene.add(mesh);
      techObjects.current.push(mesh);
    });

    // Animation loop with SMOOTH movements
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.0005; // MUCH SLOWER time

      // Animate tech objects SMOOTHLY
      techObjects.current.forEach((object, index) => {
        // GENTLE floating animation
        object.position.y =
          object.userData.originalPosition[1] +
          Math.sin(time + object.userData.floatOffset) * 0.3;

        // SLOW rotation
        object.rotation.x += object.userData.baseRotationSpeed;
        object.rotation.y += object.userData.baseRotationSpeed;

        // GENTLE scroll-based movement (much less intense)
        const scrollEffect =
          Math.sin(scrollProgress * Math.PI * 2 + index) * 0.5; // MUCH SMALLER range
        object.position.z = object.userData.originalPosition[2] + scrollEffect;

        // SUBTLE emissive change
        const intensity = 0.2 + Math.sin(time + index) * 0.1;
        (object.material as THREE.MeshLambertMaterial).emissive
          .copy(
            new THREE.Color(
              (object.material as THREE.MeshLambertMaterial).color
            )
          )
          .multiplyScalar(intensity);
      });

      // SMOOTH background color transitions
      const t = scrollProgress; // 0 to 1

      // Define color stops
      const color1 = new THREE.Color(0x1a1a2e); // Dark blue
      const color2 = new THREE.Color(0x2e1a2e); // Dark purple
      const color3 = new THREE.Color(0x1a2e1a); // Dark green
      const color4 = new THREE.Color(0x2e2e1a); // Dark yellow

      const currentColor = new THREE.Color();

      if (t <= 0.33) {
        // Blend between color1 and color2
        const localT = t / 0.33;
        currentColor.lerpColors(color1, color2, localT);
      } else if (t <= 0.66) {
        // Blend between color2 and color3
        const localT = (t - 0.33) / 0.33;
        currentColor.lerpColors(color2, color3, localT);
      } else {
        // Blend between color3 and color4
        const localT = (t - 0.66) / 0.34;
        currentColor.lerpColors(color3, color4, localT);
      }

      scene.background = currentColor;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isMounted, scrollProgress]);

  if (!isMounted) {
    return null;
  }

  return <div ref={mountRef} className="relative h-full w-full" />;
}
