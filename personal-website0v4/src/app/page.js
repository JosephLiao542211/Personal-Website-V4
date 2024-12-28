import Image from 'next/image';
import { motion } from 'framer-motion';

// Home component
export default function Home() {
    // Function to format date
    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        };
        return date.toLocaleString('en-US', options);
    };

    return (
        <div className="relative bg-background text-foreground">
            {/* Background Image */}
            <Image
                src="/background.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background Image"
                className="z-0 opacity-20"
            />

            {/* Date Display */}
            <p className="text-sm font-regular absolute top-5 left-5 z-10">
                {formatDate(new Date())}
            </p>

            {/* Resume Section */}
            <div className="flex items-center space-x-2 absolute top-5 right-5 z-10">
                <p className="text-sm font-regular">RESUME</p>
                <Image
                    className="mb-1"
                    src="/clipboard.svg"
                    width={18}
                    height={18}
                    alt="Clipboard Icon"
                />
            </div>

            {/* Social Links */}
            <div className="absolute bottom-5 right-5 flex space-x-7 z-10">
                <a
                    href="https://www.instagram.com/joseph_artstuff/"
                    target="_blank"
                >
                    <div className="flex space-x-1">
                        <p className="text-sm font-regular underline">
                            Instagram
                        </p>
                        <Image
                            src="/diagarrow.svg"
                            width={10}
                            height={10}
                            alt="Instagram Link Arrow"
                        />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/joseph-liao-681b3a273/"
                    target="_blank"
                >
                    <div className="flex space-x-1">
                        <p className="text-sm font-regular underline">
                            Linkedin
                        </p>
                        <Image
                            src="/diagarrow.svg"
                            width={10}
                            height={10}
                            alt="LinkedIn Link Arrow"
                        />
                    </div>
                </a>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center min-h-screen p-8 z-10">
                <main className="flex flex-col items-center text-center z-10">
                    {/* Availability Status */}
                    <div className="flex items-center space-x-2 pb-3 z-10">
                        <span className="inline-block w-3 h-3 mb-[1px] bg-green-500 rounded-full"></span>
                        <p className="text-sm font-regular sm:text-xl">
                            available for hire
                        </p>
                    </div>
                    {/* Name and Title */}
                    <p className="text-7xl font-regular z-10 sm:text-9xl ">
                        JOSEPH LIAO
                        <span className="text-4xl font-regular">™</span>
                    </p>
                    <p className="text-sm font-regular sm:text-xl">
                        Programmer . Artist . Wrestler
                    </p>
                </main>
            </div>
        </div>
    );
}
