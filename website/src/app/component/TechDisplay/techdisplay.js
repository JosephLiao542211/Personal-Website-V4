'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechDisplay = ({ accordionItems }) => {
    const [activeIndex, setActiveIndex] = useState(0);

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
        <div className="h-screen flex gap-8 py-16">
            {/* Main Display */}
            <div className='flex-col w-full'>
                <motion.div 
                    className="flex-1 relative bg-black rounded-lg overflow-hidden h-[80%]"
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
                                    className="w-full h-full object-cover"
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
                                    className="w-full object-cover"
                                    initial={{ opacity: 0.95 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}
                           
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
                <div className='rounded-lg mt-4 h-[20%]'>
                    <h2 className="font-regular text-3xl  font-bold text-white">{projects[activeIndex].title}</h2>
                    <p className="font-regular text-sm">{projects[activeIndex].description}</p>
                </div>
            </div>

            {/* Side Tiles */}
            <div className="w-[20%] h-full flex flex-col">
                {/* Title */}
                <h1 className="text-7xl font-regular z-10 sm:text-5xl select-none mb-8">Projects</h1>
                
                {/* Grid of tiles */}
                <div className="grid grid-cols-2 gap-4 px-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`group bg-white relative aspect-square rounded-lg cursor-pointer overflow-hidden transition-all duration-500 ease-out ${
                                activeIndex === index 
                                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black shadow-2xl shadow-white/40' 
                                    : 'hover:shadow-lg hover:shadow-white/15'
                            }`}
                            whileHover={{ 
                                scale: 1.03,
                                y: -2
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={() => setActiveIndex(index)}
                        >
                            {/* Image */}
                            <img 
                                src={project.icon || project.image}
                                alt={project.title}
                                className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                                    activeIndex === index 
                                        ? 'brightness-110 contrast-110' 
                                        : 'brightness-75 hover:brightness-90'
                                }`}
                            />
                            
                            {/* Active indicator */}
                            {activeIndex === index && (
                                <motion.div 
                                    className="absolute top-2 right-2 w-2.5 h-2.5 bg-white rounded-full shadow-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TechDisplay;
