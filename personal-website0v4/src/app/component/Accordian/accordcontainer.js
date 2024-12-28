'use client';
import React, { useState } from 'react';
import AccordionItem from './accordionitem';

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="space-y-2 z-10">
            {items.map((item, index) => (
                <div key={index} className=" rounded-lg overflow-hidden">
                    <AccordionItem
                        title={item.title}
                        content={item.content}
                        openIndex={openIndex} // Use correct casing here
                        index={index}
                        setOpenIndex={setOpenIndex}
                    />
                </div>
            ))}
        </div>
    );
}
