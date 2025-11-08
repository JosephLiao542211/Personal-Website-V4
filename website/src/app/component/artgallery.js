'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
const ExpandingGallery = () => {
    const images = [
        {
            src: '/Art/File_000 (4).JPG',
            title: 'Image 1',
            date: '2023-01-01',
        },
        {
            src: '/Art/File_005 (2).jpeg',
            title: 'Image 2',
            date: '2023-01-02',
        },
        {
            src: '/Art/head.jpg',
            title: 'Image 3',
            date: '2023-01-03',
        },
        {
            src: '/Art/IMG_0579.JPG',
            title: 'Image 4',
            date: '2023-01-04',
        },
        {
            src: '/Art/File_011.jpeg',
            title: 'Image 5',
            date: '2023-01-05',
        },
        {
            src: '/Art/monkey.jpg',
            title: 'Image 6',
            date: '2023-01-06',
        },
        {
            src: '/Art/IMG_0086.jpg',
            title: 'Image 7',
            date: '2023-01-07',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 8',
            date: '2023-01-08',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 9',
            date: '2023-01-09',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 10',
            date: '2023-01-10',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 10',
            date: '2023-01-10',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 10',
            date: '2023-01-10',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 10',
            date: '2023-01-10',
        },
        {
            src: 'gingerbread.JPG',
            title: 'Image 10',
            date: '2023-01-10',
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(images.length - 1); // Start with the last image expanded

    const handleMouseEnter = (index) => {
        setExpandedIndex(index);
    };

    const handleMouseLeave = () => {
        // Only reset if the mouse leaves the last hovered strip and doesn't enter a new one
        setExpandedIndex((prev) => (prev === null ? null : prev));
    };

    return (
        <div className="flex-col overflow-hidden w-full justify-around">
             <h1 className=" text-primary hidden md:block text-5xl font-regular pl-4 pb-3  font-medium ">
                            Explore My <br></br>Artwork:
            </h1>
            <div className='flex overflow-hidden w-full justify-around'>
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-end overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
                            ${
                                expandedIndex === index
                                    ? 'w-[400px] grow-0 shrink-0'
                                    : 'w-[25px] grow-0 shrink-0 opacity-70'
                            }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative w-[400px] h-[75vh] flex items-end">
                            {expandedIndex === index && (
                                <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="absolute justify-between top-[-5px] flex left-0 w-full bg-opacity-50 text-white p-2">
                                    <h3 className="font-regular text-sm">
                                        {item.title}
                                    </h3>
                                    <p className="font-regular text-sm">
                                        {item.date}
                                    </p>
                                </motion.div>
                            )}
                            <img
                                src={item.src}
                                alt={``}
                                className="w-[400px] h-[95%] object-cover rounded-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpandingGallery;
