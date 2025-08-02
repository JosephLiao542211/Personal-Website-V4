'use client';
import React, { useState } from 'react';
import AccordionItem from './accordionitem';

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="space-y-2 z-10">
            {items.map((item, index) => (
                <div key={index} className="rounded-lg ">
                    <AccordionItem
                        link={item.link}
                        title={item.title}
                        tags={item.tags}
                        content={item.content}
                        photo={item.photos}
                        openIndex={openIndex} // Use correct casing here
                        index={index}
                        setOpenIndex={setOpenIndex}
                    />
                </div>
            ))}
        </div>
    );
}
