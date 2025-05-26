'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechDisplay = ({ accordionItems }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showTopGradient, setShowTopGradient] = useState(false);
    const [showBottomGradient, setShowBottomGradient] = useState(true);
    const scrollContainerRef = useRef(null);

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const isAtTop = container.scrollTop === 0;
        const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;

        setShowTopGradient(!isAtTop);
        setShowBottomGradient(!isAtBottom);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            // Initial check
            handleScroll();
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const projects = accordionItems.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.content.split('.')[0], // Take first sentence as description
        image: item.photos[0] ? `/${item.photos[0]}` : '/placeholder.jpg',
        tags: item.tags,
        icon: item.icon,
        link: item.link
    }));

    return (
        <div className="h-screen py-16 flex gap-8">
            {/* Main Display */}
            <motion.div 
                className="flex-1 relative h-[100%] bg-black rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='h-full'
                    >
                        {accordionItems[activeIndex].video ? (
                            <motion.video
                                src={`/${accordionItems[activeIndex].video}`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[100%] bg-orange-400 object-contain pb-32"
                                initial={{ opacity: 0.95 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        ) : (
                            <motion.img
                                src={projects[activeIndex].image}
                                alt={projects[activeIndex].title}
                                className="w-full h-[100%] object-cover"
                                initial={{ opacity: 0.95 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent h-1/3 flex flex-col justify-end">
                            <h2 className="text-white text-2xl font-bold">{projects[activeIndex].title}</h2>
                            <p className="text-white/80">{projects[activeIndex].description}</p>
                        </div>
                        <motion.div 
                            className="absolute top-0 left-0 right-0 h-full bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className="text-center">
                                <div className="flex gap-2 justify-center mb-4">
                                    {projects[activeIndex].tags.map((tag, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 bg-white/20 rounded-full text-white text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a 
                                    href={projects[activeIndex].link}
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="inline-block px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Side Tiles */}
            <div className="relative w-40">
                {/* Top gradient */}
                <div className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showTopGradient ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Scrollable content */}
                <div ref={scrollContainerRef} className="h-full overflow-y-auto px-4 space-y-4 py-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`h-32 w-32 rounded-lg cursor-pointer overflow-hidden bg-white ${
                                activeIndex === index ? 'ring-2 ring-blue-500' : ''
                            }`}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img 
                                src={project.icon || project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showBottomGradient ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        </div>
    );
};

export default TechDisplay;
