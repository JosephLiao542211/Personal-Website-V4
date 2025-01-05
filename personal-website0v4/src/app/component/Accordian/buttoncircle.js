'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ButtonCircle = ({ text = 'Next', duration = 20, onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center h-20 w-20 font-regular text-white p-4 rounded-full z-10 hover:bg-green-500 transition-colors"
            onClick={onClick}
        >
            <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                {text}
            </div>
            <motion.div
                className="absolute inset-0 border-2 border-dashed border-white rounded-full"
                style={{ margin: '5px' }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: duration,
                }}
            ></motion.div>
        </motion.button>
    );
};

export default ButtonCircle;
