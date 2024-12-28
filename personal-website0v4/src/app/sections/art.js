import React from 'react';
import Image from 'next/image';

const ArtSection = () => {
    return (
        <section className="relative h-screen">
            <Image
                src="/artbg.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background Image"
                className=" opacity-50"
            />

            <div className="absolute bottom-5 left-5">
                <h1 className="text-7xl font-regular z-10 sm:text-9xl">Art</h1>
                <p className="text-sm font-regular z-10">
                    Welcome to the art section of my personal website.
                </p>
            </div>
        </section>
    );
};

export default ArtSection;
