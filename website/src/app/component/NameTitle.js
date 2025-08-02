import { motion } from 'motion/react';
export default function NameTitle() {
    return (
        <motion.p
            className="text-7xl font-regular z-10 sm:text-9xl"
            initial={{ opacity: 0, scale: 1.25 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
        >
            {Array.from('JOSEPH LIAO').map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
            <span className="text-4xl font-regular">™</span>
        </motion.p>
    );
}
