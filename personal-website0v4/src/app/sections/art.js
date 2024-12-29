import React from 'react';
import Image from 'next/image';
import EntranceText from '../component/EntranceText';
import ArtGallery from '../component/artgallery';

const ArtSection = () => {
    return (
        <section className="relative h-screen">
            <div className="absolute bottom-10 right-5 min-w-[800px] max-w-3xl z-10">
                <p className="text-primary text-sm font-regular text-center">
                    Explore My Artwork:
                </p>
                <ArtGallery></ArtGallery>
            </div>

            <Image
                src="/artbg.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background Image"
                className=" opacity-50"
            />

            <div className="absolute bottom-5 left-5">
                <EntranceText
                    text="Welcome to the art section of my personal website."
                    title="Art"
                ></EntranceText>
            </div>
        </section>
    );
};

export default ArtSection;
