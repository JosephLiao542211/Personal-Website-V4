'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialLink = ({ name, hoverScale = true, image, url, icon}) => {
    return (
        <a href={url}>
        <motion.div
            className="flex space-x-1"
            initial={{ y: 100, opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1 },
            }}
            whileHover={
                hoverScale
                    ? {
                          scale: 1.1,
                          transition: { duration: 0.2 },
                      }
                    : {}
            }
        >
            {icon && image ? 
                
            <img src={image} >
                {name}
            </img> 

            :  
                
            <p className="text-primary text-sm font-regular underline">
                {name}
            </p>
            
            }            
            
           
            <Image
                src={`${image ? image : "/diagarrow.svg"}`}
                width={10}
                height={10}
                alt="LinkedIn Link Arrow"
            />
        </motion.div>
        </a>
    );
};

export default SocialLink;
