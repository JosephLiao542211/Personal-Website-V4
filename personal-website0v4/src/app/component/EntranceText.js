'use client';
import { motion } from 'motion/react';

export default function EntranceText({ text, title }) {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
        >
            <h1 className="text-7xl font-regular z-10 sm:text-9xl select-none">
                {title}
            </h1>
            <p className="text-sm font-regular">{text}</p>
        </motion.div>
    );
}
