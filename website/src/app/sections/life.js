'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import EntranceText from '../component/EntranceText';

const LifeSection = () => {
    const images = [
        '/life3.jpg',
        '/life.JPG',
        '/lif2.jpg',
        '/Summer Pitch 2024 Local Reach.jpg.webp',
        '/bananda.jpg',
    ];

    const texts = [
        {
            title: 'UofT Open 2023',
            content:
                'I started freestyle wrestling in my first year of university, far later than most of my peers. The sport was grueling, and I felt like a baby deer on the mats—frail, weak, and clueless.\n\nAt first glance, wrestling may seem like chaotic limbs and muscle, but to me, it’s an art. Wrestlers are artists, each with unique styles and techniques, using the mat as their canvas. Perfecting a single move could take a lifetime.\n\nThree years in, I’ve barely scratched the surface, but I love every second—even when I’m getting my ass kicked. Wrestling taught me it’s not about winning or losing; it’s about progress, and I’m here for every lesson.',
            quote: '"You can\'t get stronger unless you\'ve been broken down and tested. - Cary Kolat"',
            date: 'Nov 30th, 2023',
        },
        {
            title: 'Qhacks 2024 - 5th Place',
            content:
                'Qhacks 2024 was an unforgettable experience filled with challenges, growth, and camaraderie. Placing 5th was an achievement made possible by teamwork and late nights filled with problem-solving and determination. The event was not just about the competition but about building connections, learning new skills, and pushing the boundaries of what we could create together.',
            quote: '"Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter." - Eric S. Raymond',
            date: 'Fed 2nd, 2024',
        },
        {
            title: "Mayor's Innovation Challenge - 1st Place",
            content:
                'At the Mayor Innovation Challenge 2024, I had the opportunity to pitch BaoBab, a non-profit donation app that connects suppliers and recipients for efficient goods drop-offs. The pitch was a success, earning us $5,000 in seed funding and access to the QVenture programs, providing invaluable resources to help grow and scale the initiative.',
            quote: '"I have found that among its other benefits, giving liberates the soul of the giver - Dr. Maya Angelou"',
            date: 'March 8th, 2024',
        },
        {
            title: 'Kingston Regional Pitch - 2nd Place',
            content:
                'Pitched Local Reach, our AI-driven solution to help bars and restaurants reclaim ad space using advanced commercial detection technology. The presentation earned us 2nd place and $10,000 in seed funding. "Fail fast, Fail often;" I never truly understood this concept until my startup, Local Reach. Centering around monetizing restaurant TV\'s, with , missed deadlines, persistent technical setbacks and 100-hour work weeks, it was certainly not an easy journey. But it was a journey that taught me more than any other experience in my life. ',
            quote: '"if you cannot fail, you cannot learn.― Eric Ries, The Lean Startup"',
            date: 'July 20, 2024',
        },
        {
            title: 'Banana Chronicles',
            content:
                '"Me and my good friend Derek, dressed as bananas. Sometimes, it’s the silly, lighthearted moments that remind us how important it is to laugh, let go, and enjoy life with the people who matter most."',
            quote: '“Nobody looks stupid when they are having fun.”-Amy Poehler',
            date: 'October 31st, 2023',
        },
    ];

    const [page, setPage] = useState(0);
    const imageIndex = Math.abs(page % images.length);

    const paginate = (direction) => setPage((prev) => prev + direction);

    const variants = {
        enter: { x: 1000, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -1000, opacity: 0 },
    };

    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={page}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                        }}
                        className="absolute w-full h-full"
                    >
                        <Image
                            src={images[imageIndex]}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            alt={`Background Image ${imageIndex + 1}`}
                            className="opacity-50"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-5 left-5 z-10"
            >
                <div className="relative max-w-[50vw] mt-32  md:absolute  bottom-5 ">
                    <EntranceText
                        text="All about my Life. What does it mean to live? For me it means spending it with the people I love doing the things I love."
                        title="Life"
                    />
                </div>
            </motion.div>

            <motion.div
                key={`content-${page}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute md:top-1/4 md:right-16 bg-neutral-700 bg-opacity-60 p-5 rounded-lg z-100 max-w-md"
            >
                <div className="flex justify-between">
                    <h2 className="text-md font-regular mb-3">
                        {texts[imageIndex].title}
                    </h2>
                    <p className="text-sm font-regular mr-2">
                        {texts[imageIndex].date}
                    </p>
                </div>

                <p className="text-sm italic font-regular text-primary my-2">
                    {texts[imageIndex].quote}
                </p>

                <p className="text-sm font-regular mb-2">
                    {texts[imageIndex].content}
                </p>
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(1)}
                className="absolute bottom-5 right-5 font-regular text-white p-4 rounded-full z-10 hover:bg-green-500 transition-colors"
            >
                <div className="relative flex items-center justify-center h-20 w-20">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                        Next
                    </div>
                    <motion.div
                        className="absolute inset-0 border-2 border-dashed border-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            // ease: 'linear',
                        }}
                    ></motion.div>
                </div>
            </motion.button>
        </section>
    );
};

export default LifeSection;
