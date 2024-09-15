import React, { useEffect, useState } from 'react';
import './ParticleTrail.css'; // CSS for particle styling

const ParticleTrail = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Function to create a new particle at the mouse position
    const createParticle = (x, y) => ({
      id: Math.random(),
      x,
      y,
      hue: Math.floor(Math.random() * 60) + 90, // Random hue between 90 and 150
      lifetime: Math.random() * 1000 + 500, // Lifetime of each particle (500-1500ms)
      createdAt: Date.now(),
    });

    const handleMouseMove = (e) => {
      const newParticles = [];
      // Create 5 particles at the mouse position
      for (let i = 0; i < 5; i++) {
        newParticles.push(createParticle(e.clientX, e.clientY));
      }
      setParticles((prev) => [...prev, ...newParticles]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up particles after their lifetime has expired
    const intervalId = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.filter((p) => Date.now() - p.createdAt < p.lifetime)
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            backgroundColor: `hsl(${particle.hue}, 100%, 50%)`,
            opacity: 1 - (Date.now() - particle.createdAt) / particle.lifetime,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleTrail;
