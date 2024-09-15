import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

const Mouse = () => {
  const sketchRef = useRef();
  const [mouseHasMoved, setMouseHasMoved] = useState(false);
  const particles = useRef([]);

  useEffect(() => {
    const sketch = (p) => {
      let angle = p.PI / 3;
      let length = 2;

      // Particle class definition
      class Particle {
        constructor(pos) {
          this.pos = pos;
          this.vel = p
            .createVector(p.random(length * 0.5, length * 1.5), 0)
            .rotate(angle * Math.round(p.random(0, 360)));
          this.hue = p.random(90, 150);
          this.sat = 100;
          this.val = 100;
          this.lifetime = p.random(50, 150);
          this.age = 0;
          particles.current.push(this);
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
          particles.current.splice(particles.current.indexOf(this), 1);
        }
      }

      // Initial setup of the canvas
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB);
        p.background(0, 0, 0);
        p.noStroke();

        // Add initial particles
        for (let i = 0; i < 500; i++) {
          new Particle(p.createVector(p.random(p.width), p.random(p.height)));
        }
      };

      // Drawing and animation loop
      p.draw = () => {
        if (!mouseHasMoved) {
          for (let i = 0; i < 5; i++) {
            new Particle(p.createVector(p.random(p.width), p.random(p.height)));
          }
        }
        p.background(0, 0, 0, 0.1);

        // Update and draw particles
        particles.current.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      };

      // Track mouse movement
      p.mouseMoved = () => {
        setMouseHasMoved(true);
        for (let i = 0; i < 5; i++) {
          new Particle(p.createVector(p.mouseX, p.mouseY));
        }
      };
    };

    // Create a new p5 instance
    const canvas = new p5(sketch, sketchRef.current);

    return () => {
      // Cleanup p5 instance on component unmount
      canvas.remove();
    };
  }, [mouseHasMoved]);

  return <div ref={sketchRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Mouse;
