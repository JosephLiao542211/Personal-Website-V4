'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MainDisplay = ({ activeIndex, projects, accordionItems }) => {
    return (
        <div className='flex-col w-full'>
            {/* Project Title */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex-col items-center gap-2 justify-center'
            >
                <h1 className="text-7xl font-regular z-10 sm:text-5xl select-none mb-2">
                    {projects[activeIndex].title}
                </h1>
            </motion.div>

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
        </div>
    );
};

export default MainDisplay;
