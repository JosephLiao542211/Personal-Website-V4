'use client';
import { useState } from 'react';
import ButtonCircle from './Accordian/buttoncircle';

const MobileArtGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = ['/lif2.jpg', '/life3.jpg', '/image3.jpg'];

    return (
        <div className="w-full mx-auto px-6 z-10">
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-auto mb-2"
            />

            <div className="flex justify-between gap-2 mt-10">
                <ButtonCircle
                    text="Prev"
                    onClick={() =>
                        setCurrentIndex((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                        )
                    }
                />
                <ButtonCircle
                    text="Next"
                    onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % images.length)
                    }
                />
            </div>
        </div>
    );
};

export default MobileArtGallery;
