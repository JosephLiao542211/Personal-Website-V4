import React from 'react';
import EntranceText from '../component/EntranceText';
import ParticlesComponent from '../component/particless';
import Accordion from '../component/Accordian/accordcontainer';
import SocialLink from '../component/sociallink';
import GithubStats from '../component/Githubstats';

export default function TechSection() {
    const accordionItems = [
        {
            title: 'Local Reach',
            content:
                'A computer vision startup developing lightweight AI algorithms for ad detection in commercial spaces. Achieved 96% detection accuracy using TensorFlow and OpenCV, deployed at 5 restaurants, generating over $3,000 in revenue in 5 months. Raised $60,000 in funding and participated in incubators like QYourVenture and Startup Survivor.',
            link: 'https://example.com/local-reach',
        },
        {
            title: 'Livestream App',
            content:
                'A React Native app that streams live footage from a Raspberry Pi camera. Utilizes GStreamer for low-latency streaming and includes backend integration for seamless video playback.',
            link: 'https://example.com/livestream-app',
        },
        {
            title: 'Boxing Data Analyzer',
            content:
                'An IoT-enabled React app integrated with Arduino sensors for tracking punching data. Displays real-time stats like punch velocity and provides training advice using OpenAI’s API, combining hardware and software in an engaging way.',
            link: 'https://example.com/boxing-data-analyzer',
        },
        {
            title: 'HackMIT V2',
            content:
                'A Next.js web application built as part of a competitive hackathon project. Features a polished frontend and innovative solutions designed to meet the hackathon’s theme and goals.',
            link: 'https://example.com/hackmit-v2',
        },
        {
            title: 'Logo Classifier',
            content:
                'An advanced image classification project using TensorFlow and MobileNetV2 to identify logos. Designed for scalability with a structured dataset and deployed for experimental use cases.',
            link: 'https://example.com/logo-classifier',
        },
        {
            title: 'Dynamic Blob Animation',
            content:
                'A creative coding project using Framer Motion in React to create animated gradient blobs with dynamic motion paths. Aimed at delivering visually stunning and interactive frontend designs.',
            link: 'https://example.com/dynamic-blob-animation',
        },
    ];

    return (
        <section className="h-fit relative md:h-screen md:relative">
            <ParticlesComponent></ParticlesComponent>
            <div className="md:max-w-[50vw] relative mt-36 px-8 z-10 mx-auto md:absolute md:right-5 md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
                <Accordion items={accordionItems}></Accordion>
            </div>
            <div className=" relative max-w-lg mt-32 pr-[7%] md:absolute bottom-5 left-5">
                <EntranceText
                    title={'Tech'}
                    text={
                        'I thrive at the intersection of creativity and problem-solving, using tech to bring ideas to life. From AI algorithms to engaging frontends, my journey blends innovation, entrepreneurship, and real-world impact.'
                    }
                ></EntranceText>
                <GithubStats></GithubStats>
            </div>
            <div className="absolute z-10 bottom-5 right-5">
                <SocialLink hoverScale={true} name={'Github'}></SocialLink>
            </div>
        </section>
    );
}
