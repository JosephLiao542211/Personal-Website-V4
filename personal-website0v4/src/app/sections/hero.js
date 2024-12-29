'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';
import NameTitle from '../component/NameTitle';

export default function Hero() {
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

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [0.23, 0.0]);

    // Refs for sections to detect when they're in view
    const dateRef = useRef(null);
    const resumeRef = useRef(null);
    const socialsRef = useRef(null);
    const mainContentRef = useRef(null);

    const dateInView = useInView(dateRef, { once: false });
    const resumeInView = useInView(resumeRef, { once: false });
    const socialsInView = useInView(socialsRef, { once: false });
    const mainContentInView = useInView(mainContentRef, { once: false });

    return (
        <div className="relative bg-background text-foreground">
            {/* Background Image */}
            <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/background.jpg"
                    fill={true}
                    objectFit="cover"
                    quality={100}
                    alt="Background Image"
                    className="blur-sm"
                />
            </motion.div>

            {/* Date Display */}
            <motion.div
                ref={dateRef}
                className="text-sm font-regular absolute top-5 left-5 z-10"
                initial={{ x: -100, opacity: 0 }}
                animate={dateInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
            >
                <p>{formatDate(new Date())}</p>
            </motion.div>

            {/* Resume Section */}
            <motion.div
                ref={resumeRef}
                className="flex items-center space-x-2 absolute top-5 right-5 z-10 hover:underline"
                initial={{ x: 100, opacity: 0 }}
                animate={resumeInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
            >
                <a
                    href="/Joseph_Liao_Resume.pdf"
                    download="Joseph_Liao_Resume.pdf"
                    className="flex items-center space-x-2"
                >
                    <p className="text-primary text-sm font-regular">RESUME</p>
                    <Image
                        className="mb-1"
                        src="/clipboard.svg"
                        width={18}
                        height={18}
                        alt="Clipboard Icon"
                    />
                </a>
            </motion.div>

            {/* Social Links */}
            <div
                ref={socialsRef}
                className="absolute bottom-5 right-5 flex space-x-7 z-10"
            >
                <a
                    href="https://www.instagram.com/joseph_artstuff/"
                    target="_blank"
                >
                    <motion.div
                        className="flex space-x-1"
                        initial={{ y: 100, opacity: 0 }}
                        animate={socialsInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.25 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <p className="text-primary text-sm font-regular underline">
                            Instagram
                        </p>
                        <Image
                            src="/diagarrow.svg"
                            width={10}
                            height={10}
                            alt="Instagram Link Arrow"
                        />
                    </motion.div>
                </a>
                <a
                    href="https://www.linkedin.com/in/joseph-liao-681b3a273/"
                    target="_blank"
                >
                    <motion.div
                        className="flex space-x-1"
                        initial={{ y: 100, opacity: 0 }}
                        animate={socialsInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <p className="text-primary text-sm font-regular underline">
                            LinkedIn
                        </p>
                        <Image
                            src="/diagarrow.svg"
                            width={10}
                            height={10}
                            alt="LinkedIn Link Arrow"
                        />
                    </motion.div>
                </a>
            </div>

            {/* Main Content */}
            <div
                ref={mainContentRef}
                className="flex flex-col items-center justify-center min-h-screen p-8 z-10"
            >
                <main className="flex flex-col items-center text-center z-10">
                    <motion.div
                        className="flex items-center space-x-2 pb-3 z-10"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={
                            mainContentInView ? { opacity: 1, scale: 1 } : {}
                        }
                        transition={{ duration: 0.75 }}
                    >
                        <div>
                            <span className="absolute mt-1 inline-block w-3 h-3 mb-[1px] bg-green-500 rounded-full"></span>
                            <span className="animate-ping inline-block w-3 h-3 mb-[1px] bg-green-500 rounded-full"></span>
                        </div>
                        <p className="text-primary text-sm font-regular sm:text-xl">
                            available for hire
                        </p>
                    </motion.div>
                    <NameTitle></NameTitle>
                    <div className="flex">
                        <motion.p
                            className="text-primary text-sm font-regular sm:text-xl"
                            initial={{ y: 100, opacity: 0 }}
                            animate={
                                mainContentInView ? { y: 0, opacity: 1 } : {}
                            }
                            transition={{ duration: 0.75, delay: 0.5 }}
                        >
                            Programmer .
                        </motion.p>
                        <motion.p
                            className="text-primary text text-sm font-regular sm:text-xl"
                            initial={{ y: 100, opacity: 0 }}
                            animate={
                                mainContentInView ? { y: 0, opacity: 1 } : {}
                            }
                            transition={{ duration: 0.75, delay: 0.75 }}
                        >
                            &nbsp; Artist .
                        </motion.p>
                        <motion.p
                            className="text-primary text-sm font-regular sm:text-xl"
                            initial={{ y: 100, opacity: 0 }}
                            animate={
                                mainContentInView ? { y: 0, opacity: 1 } : {}
                            }
                            transition={{ duration: 0.75, delay: 1 }}
                        >
                            &nbsp; Wrestler
                        </motion.p>
                    </div>
                </main>
            </div>
        </div>
    );
}
