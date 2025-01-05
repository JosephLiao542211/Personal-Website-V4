'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SocialLink from '../sociallink';

const AccordionItem = ({
    title,
    content,
    openIndex,
    photo,
    index,
    setOpenIndex,
    tags,
    link,
}) => {
    const isOpen = openIndex === index;

    const handleClick = () => {
        setOpenIndex(isOpen ? null : index);
    };

    const tagColors = {
        Javascript: 'bg-yellow-200',
        React: 'bg-blue-200',
        CSS: 'bg-green-200',
        HTML: 'bg-red-200',
        TensorFlow: 'bg-orange-200',
        OpenCV: 'bg-teal-200',
        Python: 'bg-blue-400',
        IoT: 'bg-pink-200',
        'React Native': 'bg-indigo-200',
        Typescript: 'bg-blue-300',
        ExpressJS: 'bg-gray-300',
        'Node.js': 'bg-green-300',
        'C++': 'bg-purple-300',
        // Add more tags and colors as needed
    };

    return (
        <div className="p-2">
            <button
                onClick={handleClick}
                className="w-full flex items-center justify-between group"
                aria-expanded={isOpen}
            >
                <span
                    className={`font-regular text-primary transition-transform scale-100 duration-200 group-hover:opacity-100 ${
                        isOpen ? 'scale-100 opacity-100' : 'opacity-80'
                    }`}
                >
                    {title}
                    <span className="mx-2 lg:inline hidden">
                        {tags &&
                            tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`inline-block rounded-full px-3 py-1 text-sm text-gray-700 mr-2 ${
                                        tagColors[tag] || 'bg-gray-200'
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                    </span>
                    <span className="mx-2 inline lg:hidden">
                        {tags &&
                            tags.slice(0, 2).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`inline-block rounded-full px-3 py-1 text-sm text-gray-700 mr-2 ${
                                        tagColors[tag] || 'bg-gray-200'
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        {tags && tags.length > 3 && (
                            <span className="inline-block rounded-full px-3 py-1 text-sm text-gray-700 mr-2 bg-gray-200">
                                +{tags.length - 2}
                            </span>
                        )}
                    </span>
                </span>

                <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            <div
                className={`overflow-y-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-72' : 'max-h-0'
                }`}
            >
                <span className="ml-4 flex-1">
                    {link && (
                        <a href={link}>
                            <SocialLink
                                hoverScale={false}
                                name={`Repository`}
                            />
                        </a>
                    )}
                </span>
                <div className="font-regular py-4 pr-12 text-sm">{content}</div>
                <div className="pr-12">
                    {photo && (
                        <div className="flex mt-4 mb-2 flex-wrap">
                            {photo.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`Photo ${idx + 1}`}
                                    className="w-1/4 p-1"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
