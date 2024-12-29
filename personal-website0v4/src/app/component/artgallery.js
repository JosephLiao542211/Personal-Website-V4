'use client';
import React, { useState } from 'react';

const ExpandingGallery = () => {
    const images = [
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 1',
            date: '2023-01-01',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 2',
            date: '2023-01-02',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 3',
            date: '2023-01-03',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 4',
            date: '2023-01-04',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 5',
            date: '2023-01-05',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 6',
            date: '2023-01-06',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 7',
            date: '2023-01-07',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 8',
            date: '2023-01-08',
        },
        {
            src: 'https://via.placeholder.com/400',
            title: 'Image 9',
            date: '2023-01-09',
        },
        {
            src: 'https://via.placeholder.com/400',
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
        <div className="flex overflow-hidden w-full justify-around">
            {images.map((item, index) => (
                <div
                    key={index}
                    className={`flex justify-center items-end h-[600px] overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
                        ${
                            expandedIndex === index
                                ? 'w-[400px] grow-0 shrink-0'
                                : 'w-[25px] grow-0 shrink-0 opacity-70'
                        }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="relative w-[400px] h-[600px] flex items-end">
                        {expandedIndex === index && (
                            <div className="absolute justify-between top-5 flex left-0 w-full bg-opacity-50 text-white p-2">
                                <h3>{item.title}</h3>
                                <p>{item.date}</p>
                            </div>
                        )}
                        <img
                            src={item.src}
                            alt={`Placeholder ${index + 1}`}
                            className="w-[400px] h-[90%] object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpandingGallery;
