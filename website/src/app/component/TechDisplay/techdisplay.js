'use client';
import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import SideTiles from './SideTiles';

const TechDisplay = ({ accordionItems }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = accordionItems.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.content.split('.')[0], // Take first sentence as description
        image: item.photos[0] ? `/${item.photos[0]}` : '/placeholder.jpg',
        tags: item.tags,
        icon: item.icon,
        link: item.link
    }));

    return (
        <div className="h-screen flex gap-8 py-16">
            <MainDisplay
                activeIndex={activeIndex}
                projects={projects}
                accordionItems={accordionItems}
            />
            <SideTiles
                projects={projects}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </div>
    );
};

export default TechDisplay;
