'use client';
import { motion } from 'motion/react';
import SocialLink from './sociallink';

// socialinfo structure {string:url, string:image, bool: showimage , bool:hoverscale}


export default function EntranceText({ text, title, socialinfo }) {
    
    return (
        <div>
        <motion.div
        //entrance animation
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
        ><div className='flex'>
            <h1 className="text-7xl font-regular z-10 sm:text-9xl select-none">
                {title}
            </h1>
         
            </div>
            <p className="text-sm font-regular opacity-60 hover:opacity-100 transition-all duration-500">{text}</p>
        </motion.div>
        </div>
    );
}
