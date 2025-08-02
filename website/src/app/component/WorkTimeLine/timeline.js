'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const timelinePoints = [
        {
            year: '2020',
            title: 'Position 1',
            description: 'Description of role and achievements'
        },
        {
            year: '2021', 
            title: 'Position 2',
            description: 'Description of role and achievements'
        },
        {
            year: '2022',
            title: 'Position 3', 
            description: 'Description of role and achievements'
        },
        {
            year: '2023',
            title: 'Position 4',
            description: 'Description of role and achievements'
        }
    ];

    return (
        <div className="w-full py-20">
            <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Timeline line */}
                <motion.div 
                    className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Timeline points */}
                <div className="flex justify-between relative">
                    {timelinePoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <motion.div 
                                className="w-4 h-4 bg-blue-500 rounded-full mb-2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.5 + (index * 0.2) }}
                            />
                            <h3 className="text-xl font-bold">{point.year}</h3>
                            <div className="text-center mt-2">
                                <h4 className="font-semibold">{point.title}</h4>
                                <p className="text-sm text-gray-600 mt-1 max-w-[200px]">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Timeline;
