import React from 'react';
import Image from 'next/image';
import EntranceText from '../component/EntranceText';
import ArtGallery from '../component/artgallery';
import MobileArtGallery from '../component/mobileartgallery';

const ArtSection = () => {
    return (
        <section className="relative h-screen">
            <div className="block absolute z-10 md:hidden">
                <p className="text-primary md:hidden text-sm font-regular my-6 text-center">
                    Explore My Artwork:
                </p>
                <MobileArtGallery></MobileArtGallery>
            </div>
            <div className="absolute bottom-10 right-5 min-w-[800px] max-w-3xl z-10">
                <p className="text-primary hidden md:block text-sm font-regular text-center">
                    Explore My Artwork:
                </p>
                <div className="hidden md:block">
                    <ArtGallery></ArtGallery>
                </div>
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
