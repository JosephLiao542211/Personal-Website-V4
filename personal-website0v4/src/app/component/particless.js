'use client';
import { useEffect, useRef } from 'react';

const ParticlesComponent = ({ options = {} }) => {
    const particlesRef = useRef(null);

    useEffect(() => {
        // Load particles.js from CDN
        const loadParticles = async () => {
            try {
                // Check if particles.js is already loaded
                if (!window.particlesJS) {
                    await import('particles.js');
                }

                // Default configuration
                const defaultOptions = {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: '#ffffff',
                        },
                        shape: {
                            type: 'circle',
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#ffffff',
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                        },
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            onclick: {
                                enable: true,
                                mode: 'push',
                            },
                            resize: true,
                        },
                    },
                    retina_detect: true,
                };

                // Initialize particles.js with merged options
                window.particlesJS(particlesRef.current.id, {
                    ...defaultOptions,
                    ...options,
                });
            } catch (error) {
                console.error('Error loading particles.js:', error);
            }
        };

        loadParticles();

        // Cleanup function
        return () => {
            // Remove the canvas element
            const canvas = document.querySelector('#particles-js canvas');
            if (canvas) {
                canvas.remove();
            }
            // Clear the pJSDom array
            if (window.pJSDom) {
                window.pJSDom = [];
            }
        };
    }, [options]);

    return (
        <div
            ref={particlesRef}
            id="particles-js"
            className="absolute inset-0 z-10"
        />
    );
};

export default ParticlesComponent;
