'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SideTiles = ({ projects, activeIndex, setActiveIndex }) => {
    return (
        <div className="w-[20%] h-full flex flex-col">
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
    );
};

export default SideTiles;
