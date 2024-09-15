// MouseTrail.js
import React, { useEffect, useRef } from "react";
import p5 from "p5";

const MouseTrail = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      let mouseHasMoved = false;
      const length = 2;
      const angle = p.PI / 3;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB);
        p.noStroke();
        p.background(0, 0, 0, 0);

        for (let i = 0; i < 500; i++) {
          new Particle(p.createVector(p.random(p.width), p.random(p.height)));
        }
      };

      p.draw = () => {
        p.clear(); // Clear the canvas every frame for transparency
        if (!mouseHasMoved) {
          for (let i = 0; i < 5; i++) {
            new Particle(p.createVector(p.random(p.width), p.random(p.height)));
          }
        }
        for (let particle of particles) {
          particle.update();
          particle.draw();
        }
      };

      p.mouseMoved = () => {
        mouseHasMoved = true;
        for (let i = 0; i < 5; i++) {
          new Particle(p.createVector(p.mouseX, p.mouseY));
        }
      };

      class Particle {
        constructor(pos) {
          this.pos = pos;
          this.vel = p.createVector(p.random(length * 0.5, length * 1.5), 0).rotate(angle * Math.round(p.random(0, 360)));
          this.hue = p.random(90, 150);
          this.sat = 100;
          this.val = 100;
          this.lifetime = p.random(50, 150);
          this.age = 0;
          particles.push(this);
        }

        update() {
          if (this.age >= this.lifetime) {
            this.remove();
          }
          this.age += 1;
          if (this.age % 10 === 0) {
            this.vel.rotate(p.random([-angle, angle]));
          }
          this.pos.add(this.vel);
        }

        draw() {
          p.push();
          p.stroke(this.hue, this.sat, this.val, 1 - this.age / this.lifetime);
          p.translate(this.pos.x, this.pos.y);
          p.line(0, 0, -this.vel.x, -this.vel.y);
          p.pop();
        }

        remove() {
          particles.splice(particles.indexOf(this), 1);
        }
      }
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove(); // Clean up p5 instance when component is unmounted
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // This ensures the mouse events go through to other components
        zIndex: -1, // Set the canvas behind other components
      }}
    ></div>
  );
};

export default MouseTrail;