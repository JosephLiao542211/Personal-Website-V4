import React from 'react';
import Image from 'next/image';
import EntranceText from '../component/EntranceText';

const ArtSection = () => {
    return (
        <section className="relative h-screen">
            <div className="relative z-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10">
                    Click Me
                </button>
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
