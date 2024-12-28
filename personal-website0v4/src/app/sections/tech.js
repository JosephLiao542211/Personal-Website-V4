import React from 'react';
import EntranceText from '../component/EntranceText';
import ParticlesComponent from '../component/particless';
import Accordion from '../component/Accordian/accordcontainer';
import SocialLink from '../component/sociallink';

export default function TechSection() {
    const accordionItems = [
        {
            title: 'Local Reach',
            content:
                'A computer vision startup developing lightweight AI algorithms for ad detection in commercial spaces. Achieved 96% detection accuracy using TensorFlow and OpenCV, deployed at 5 restaurants, generating over $3,000 in revenue in 5 months. Raised $60,000 in funding and participated in incubators like QYourVenture and Startup Survivor.',
        },
        {
            title: 'Livestream App',
            content:
                'A React Native app that streams live footage from a Raspberry Pi camera. Utilizes GStreamer for low-latency streaming and includes backend integration for seamless video playback.',
        },
        {
            title: 'Boxing Data Analyzer',
            content:
                'An IoT-enabled React app integrated with Arduino sensors for tracking punching data. Displays real-time stats like punch velocity and provides training advice using OpenAI’s API, combining hardware and software in an engaging way.',
        },
        {
            title: 'HackMIT V2',
            content:
                'A Next.js web application built as part of a competitive hackathon project. Features a polished frontend and innovative solutions designed to meet the hackathon’s theme and goals.',
        },
        {
            title: 'Logo Classifier',
            content:
                'An advanced image classification project using TensorFlow and MobileNetV2 to identify logos. Designed for scalability with a structured dataset and deployed for experimental use cases.',
        },
        {
            title: 'Dynamic Blob Animation',
            content:
                'A creative coding project using Framer Motion in React to create animated gradient blobs with dynamic motion paths. Aimed at delivering visually stunning and interactive frontend designs.',
        },
    ];

    return (
        <section className="h-screen relative">
            <ParticlesComponent></ParticlesComponent>
            <div className="max-w-lg relative mt-36 px-8 z-10 mx-auto md:absolute md:right-80 md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
                <Accordion items={accordionItems}></Accordion>
            </div>
            <div className="absolute bottom-5 left-5">
                <EntranceText
                    title={'Tech'}
                    text={'This is the tech section of the personal website.'}
                ></EntranceText>
            </div>
            <div className="absolute z-10 bottom-5 right-5">
                <SocialLink hoverScale={false} name={'Github'}></SocialLink>
            </div>
        </section>
    );
}
