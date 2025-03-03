import React from 'react';
import Image from 'next/image';
import EntranceText from '../component/EntranceText';
import ArtGallery from '../component/artgallery';
import MobileArtGallery from '../component/mobileartgallery';
import SocialLink from '../component/sociallink';

const ArtSection = () => {
    return (
        <section className="relative h-screen">
            {/* Mobile View */}
            <div className="block absolute z-10 md:hidden">
                <p className="text-primary md:hidden text-sm font-regular text-center">
                    Explore My Artwork:
                </p>
                <MobileArtGallery></MobileArtGallery>
            </div>

            {/* Computer view */}
            <div className="absolute right-5 min-w-[800px] max-w-3xl z-10">
                <p className="absolute left-1/2 top-[15%] text-primary hidden md:block text-sm font-regular text-center">
                    Explore My Artwork:
                </p>
                <div className="hidden md:block">
                    <ArtGallery></ArtGallery>
                </div>
            </div>

            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-transparent h-[10%] z-10"></div>
                <Image
                    src="/artbg.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Background Image"
                    className="opacity-30"
                />
            </div>

            <div className="absolute bottom-5 left-5 max-w-[25%]">
                <EntranceText
                    text="Welcome to the art section of my personal website. Feel free to explore some of my artwork! I've been involved in visual art since the age of 6, and have explored various mediums."
                    title="Art"
                ></EntranceText>
                {/* <SocialLink hoverScale={true} name={'Github'} url={} image={'artbg.jpg'}></SocialLink> */}
            </div>
        </section>
    );
};

export default ArtSection;
