'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HoverIcon = ({ onClick, label }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="absolute bottom-5 right-5 font-regular text-white p-4 rounded-full z-10 hover:bg-blue-500 transition-colors"
        >
            <div className="relative flex items-center justify-center h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                    {label}
                </div>
                <motion.div
                    className="absolute inset-0 border-2 border-dashed border-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                    }}
                ></motion.div>
            </div>
        </motion.button>
    );
};

export default HoverIcon;
