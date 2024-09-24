import React, { useRef, useEffect, useState } from 'react';

const MagneticEffect = ({ children }) => {
    const magneticRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if the screen size is mobile/tablet
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Disable for screens <= 768px
        };

        // Initial check
        checkScreenSize();

        // Add event listener to check screen size on window resize
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize); // Cleanup on unmount
        };
    }, []);

    useEffect(() => {
        if (isMobile) return; // Disable magnetic effect for mobile/tablet

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
    }, [isMobile]);

    return <div ref={magneticRef} className="magnetic">{children}</div>;
};

export default MagneticEffect;
