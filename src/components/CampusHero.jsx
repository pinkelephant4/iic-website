import { useEffect } from "react";
import Matter from "matter-js";
import "../styles/CampusHero.css";

const CampusHero = () => {
  useEffect(() => {
    // Create an engine with gravity
    const engine = Matter.Engine.create();
    const world = engine.world;
    engine.gravity.y = 1; // Gravity effect

    // Create a renderer
    const render = Matter.Render.create({
      element: document.querySelector(".matter-container"), // Attach to a separate div
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: "transparent",
        wireframes: false,
      },
    });

    // Create draggable, throwable rectangles
    const rectangles = [];
    for (let i = 0; i < 5; i++) {
      const rect = Matter.Bodies.rectangle(
        Math.random() * window.innerWidth, // Random x position
        100, // Start near the top of the viewport
        150, // width
        80, // height
        {
          chamfer: { radius: 15 },
          restitution: 0.8, // Bounce effect
          render: {
            fillStyle: "lightblue",
            strokeStyle: "black",
            lineWidth: 3,
          },
        }
      );
      rectangles.push(rect);
    }

    // Add a ground (matches the .end-line position)
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - 150, // Position near the bottom
      window.innerWidth,
      10, // Thin line as the ground
      {
        isStatic: true, // Prevent movement
        render: {
          fillStyle: "transparent", // Invisible ground
        },
      }
    );

    // Add rectangles and ground to the world
    Matter.World.add(world, [...rectangles, ground]);

    // Add both mouse and touch control for dragging and throwing
    const mouse = Matter.Mouse.create(render.canvas);
    const touch = Matter.Mouse.create(render.canvas); // For touchscreens (trackpads are covered by mouse events)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Enable touch support
    const touchConstraint = Matter.MouseConstraint.create(engine, {
      mouse: touch,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Matter.World.add(world, touchConstraint);

    // Run the engine and renderer
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    // Cleanup on component unmount
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className="campus-hero">
      <h1>Become Campus Ambassador</h1>
      <h1>Unite to Innovate</h1>
      <p>
        idk what to add in the text and I am too lazy to insert some lorem ipsum
        text, so please make this work and <br /> add the content as per the
        content team suggests
      </p>
      <div className="register-button"><a href="#">Register Now</a></div>
      <div className="end-line"></div>

      {/* Matter.js canvas container */}
      <div className="matter-container"></div>
    </div>
  );
};

export default CampusHero;
