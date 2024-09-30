import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import "../styles/CampusHero.css";

const CampusHero = () => {
  const sceneRef = useRef(null);
  const engine = useRef(Matter.Engine.create());
  const render = useRef(null);
  const mouseConstraint = useRef(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } = Matter;

    // Set up the renderer
    render.current = Render.create({
      element: sceneRef.current,
      engine: engine.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight * 0.8,
        wireframes: false,
        background: "transparent",
      },
    });

    // Create draggable elements
    const element1 = Bodies.rectangle(300, 200, 100, 100, { 
      restitution: 0.5, 
      render: { fillStyle: 'red' } 
    });
    const element2 = Bodies.rectangle(500, 200, 100, 100, { 
      restitution: 0.5, 
      render: { fillStyle: 'green' } 
    });
    const element3 = Bodies.rectangle(700, 200, 100, 100, { 
      restitution: 0.5, 
      render: { fillStyle: 'blue' } 
    });

    // Add elements to the world
    World.add(engine.current.world, [element1, element2, element3]);

    // Create mouse control
    const mouse = Mouse.create(render.current.canvas);
    mouseConstraint.current = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Add mouse constraint to the world
    World.add(engine.current.world, mouseConstraint.current);

    // Handle touch events for dragging
    render.current.canvas.addEventListener('touchstart', (event) => {
      event.preventDefault();
      const touch = event.touches[0];
      const mousePosition = { x: touch.clientX, y: touch.clientY };
      mouse.position = mousePosition;
      Matter.Body.setPosition(mouseConstraint.current.body, mousePosition);
      mouseConstraint.current.mouse.button = 0; // Simulate a left-click
    });

    render.current.canvas.addEventListener('touchmove', (event) => {
      event.preventDefault();
      const touch = event.touches[0];
      const mousePosition = { x: touch.clientX, y: touch.clientY };
      mouse.position = mousePosition;
    });

    render.current.canvas.addEventListener('touchend', () => {
      mouseConstraint.current.mouse.button = -1; // Release the touch
    });

    // Run the engine and the renderer
    Engine.run(engine.current);
    Render.run(render.current);

    // Cleanup on component unmount
    return () => {
      Matter.Render.stop(render.current);
      Matter.World.clear(engine.current.world);
      Matter.Engine.clear(engine.current);
      render.current.canvas.remove();
      render.current.canvas = null;
      render.current.context = null;
      render.current.textures = {};
    };
  }, []);

  return (
    <div className="campus-hero">
      <div ref={sceneRef} id="scene"></div>
    </div>
  );
};

export default CampusHero;
