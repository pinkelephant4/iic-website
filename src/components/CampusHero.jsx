import { useEffect, useRef } from "react";
import Matter from "matter-js";
import "../styles/CampusHero.css";

const CampusHero = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const wordsRef = useRef([]);
  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(window.innerHeight - 60);

  let wordsToDisplay = [
    "International",
    "Goodies",
    "Certificates",
    "LOR's",
    "Manipal University Jaipur",
  ];

  const colors = ["yellow", "yellowgreen", "pink", "red", "blue"]; // 5 colors

  useEffect(() => {
    // Setup the canvas and physics engine
    setup();

    const handleMouseMove = (event) => {
      mouseMoved(event);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const drawLoop = () => {
      draw();
      requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      // Cleanup on unmount
      Matter.World.clear(engineRef.current.world);
      engineRef.current = null;
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const setup = () => {
    engineRef.current = Matter.Engine.create();

    // Reduce gravity
    engineRef.current.world.gravity.y = 0.7; // Adjust gravity here (default is 1)

    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available
    canvas.width = widthRef.current;
    canvas.height = heightRef.current;

    // Create ground and walls
    const ground = Matter.Bodies.rectangle(
      widthRef.current / 2,
      heightRef.current - 20,
      widthRef.current,
      10,
      {
        isStatic: true,
      }
    );
    const wallLeft = Matter.Bodies.rectangle(
      0,
      heightRef.current / 2,
      10,
      heightRef.current,
      {
        isStatic: true,
      }
    );
    const wallRight = Matter.Bodies.rectangle(
      widthRef.current,
      heightRef.current / 2,
      10,
      heightRef.current,
      {
        isStatic: true,
      }
    );

    Matter.World.add(engineRef.current.world, [ground, wallLeft, wallRight]);

    // Create words
    for (let i = 0; i < wordsToDisplay.length; i++) {
      const xPosition = Math.random() * (widthRef.current - 50) + 25; // Ensure circles are within bounds
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Random color for each shape

      if (i < 2) {
        wordsRef.current.push(
          new Word(xPosition, -200, wordsToDisplay[i], true, randomColor)
        ); // Pass true for circles
      } else {
        wordsRef.current.push(
          new Word(
            Math.random() * widthRef.current,
            -200,
            wordsToDisplay[i],
            false,
            randomColor
          )
        ); // Pass false for rectangles
      }
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#eae9ff"; // Set background color to eae9ff
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    Matter.Engine.update(engineRef.current);
    for (let word of wordsRef.current) {
      word.show(ctx);
    }
  };

  class Word {
    constructor(x, y, word, isCircle, color) {
      this.word = word;
      this.isCircle = isCircle;
      this.color = color; // Store the color
      // Create body based on shape
      if (isCircle) {
        this.radius = Math.max(word.length * 7, 12); // Reduced radius for circles
        this.body = Matter.Bodies.circle(x, y, this.radius, {
          restitution: 0.8,
        });
      } else {
        const padding = 5;
        this.body = Matter.Bodies.rectangle(
          x,
          y,
          word.length * 14 + padding,
          40,
          {
            chamfer: { radius: 10 }, // Adding border-radius to rectangles
          }
        );
      }
      Matter.World.add(engineRef.current.world, this.body);
    }

    show(ctx) {
      let pos = this.body.position;
      let angle = this.body.angle;

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(angle);

      ctx.fillStyle = this.color; // Use the assigned color for the shape

      if (this.isCircle) {
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw border
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = "black"; // Change text color to black
        ctx.textAlign = "center";
        ctx.font = "bold 20px Arial"; // Slightly smaller text size
        ctx.fillText(this.word, 0, 0);
      } else {
        this.roundRect(
          ctx,
          (-this.word.length * 20) / 2,
          -20,
          this.word.length * 20 + 40,
          40,
          10
        ); // Rounded rectangle
        ctx.fill();

        // Draw border
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = "black"; // Change text color to black
        ctx.textAlign = "center";
        ctx.font = "bold 16px Arial"; // Slightly smaller text size
        ctx.fillText(this.word, 0, 0);
      }

      ctx.restore();
    }

    // Function to draw a rounded rectangle
    roundRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
  }

  const mouseMoved = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    for (let word of wordsRef.current) {
      if (
        Math.hypot(
          mouseX - word.body.position.x,
          mouseY - word.body.position.y
        ) < 50
      ) {
        Matter.Body.applyForce(
          word.body,
          { x: word.body.position.x, y: word.body.position.y },
          { x: Math.random() * 0.2 - 0.1, y: Math.random() * -0.2 }
        );
      }
    }
  };
  return (
    <div className="campus-hero">
      <h1>Become Campus Ambassador</h1>
      <h1>Unite to Innovate</h1>
      <p>
        idk what to add in the text and I am too lazy to insert some lorem ipsum
        text, so please make this work and <br /> add the content as per the
        content team suggests
      </p>
      <div className="reg-btn">
        <a href="dkkd">Register Now</a>
      </div>
      <canvas ref={canvasRef} />
      <div className="end-line"></div>
    </div>
  );
};

export default CampusHero;
