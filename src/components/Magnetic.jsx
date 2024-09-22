import React, { useRef, useEffect } from 'react';

const MagneticEffect = ({ children }) => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const magneticElement = magneticRef.current;

        const handleMouseMove = (e) => {
            const rect = magneticElement.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.5;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.5;
            magneticElement.style.transform = `translate(${x}px, ${y}px)`;
            magneticElement.style.scale = '1.1';
            magneticElement.style.transition = '.1s ease, .3s ease';
            magneticElement.style.transitionProperty = 'transform, scale';
            magneticElement.style.cursor = 'pointer';
            magneticElement.style.zIndex = '999';
        };

        const handleMouseOut = () => {
            magneticElement.style.transform = 'translate(0px, 0px)';
            magneticElement.style.scale = '1';
            magneticElement.style.transition = '.3s ease, .3s ease';
            magneticElement.style.transitionProperty = 'transform, scale';
            magneticElement.style.zIndex = '888';
        };

        magneticElement.addEventListener('mousemove', handleMouseMove);
        magneticElement.addEventListener('mouseout', handleMouseOut);

        // Cleanup event listeners
        return () => {
            magneticElement.removeEventListener('mousemove', handleMouseMove);
            magneticElement.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return <div ref={magneticRef} className="magnetic">{children}</div>;
};

export default MagneticEffect;
