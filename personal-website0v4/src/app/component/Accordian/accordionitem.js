'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SocialLink from '../sociallink';
const AccordionItem = ({
    title,
    content,
    openIndex,
    index,
    setOpenIndex,
    link,
}) => {
    const [isOpen, setIsOpen] = useState(openIndex === index);

    useEffect(() => {
        setIsOpen(openIndex === index);
    }, [openIndex, index]);

    return (
        <div className="p-2 bg-none">
            <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-4 bg-null"
            >
                <span
                    className={`overflow-show font-regular text-primary transition-all opacity-80 hover:opacity-100 ${
                        isOpen ? 'scale-125 opacity-100' : ''
                    } `}
                >
                    {title}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            <div
                className={`overflow-show transition-all duration-200 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <div className="py-4 pr-12 bg-none">{content}</div>
                <a href={link}>
                    <SocialLink
                        hoverScale={false}
                        name={title + 'Repository'}
                    />
                </a>
            </div>
        </div>
    );
};

export default AccordionItem;
