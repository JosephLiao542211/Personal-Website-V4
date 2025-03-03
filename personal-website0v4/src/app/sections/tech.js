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
            photos: ['gingerbread.JPG', 'life3.jpg'],
            tags: ['TensorFlow', 'OpenCV', 'React', 'Python', 'IoT'],
            content:
                'A computer vision startup developing lightweight AI algorithms for ad detection in commercial spaces. Achieved 96% detection accuracy using TensorFlow and OpenCV, deployed at 5 restaurants, generating over $3,000 in revenue in 5 months. Raised $60,000 in funding and participated in incubators like QYourVenture and Startup Survivor.',
            link: 'https://example.com/local-reach',
        },
        {
            title: 'Dear Journal',
            photos: ['lif2.jpg', 'life3.jpg'],
            tags: ['React Native', 'Javascript'],
            content:
                'A React Native app that streams live footage from a Raspberry Pi camera. Utilizes GStreamer for low-latency streaming and includes backend integration for seamless video playback.',
            link: 'https://example.com/livestream-app',
        },
        {
            title: 'Fight Labs',
            photos: ['lif2.jpg', 'life3.jpg'],
            tags: ['React', 'C++', 'IoT'],
            content:
                'An IoT-enabled React app integrated with Arduino sensors for tracking punching data. Displays real-time stats like punch velocity and provides training advice using OpenAI’s API, combining hardware and software in an engaging way.',
            link: 'https://example.com/boxing-data-analyzer',
        },
        {
            title: 'Stumble',
            photos: ['lif2.jpg', 'life3.jpg'],
            tags: ['React', 'Typescript', 'ExpressJS'],
            content:
                'A Next.js web application built as part of a competitive hackathon project. Features a polished frontend and innovative solutions designed to meet the hackathon’s theme and goals.',
            link: 'https://example.com/hackmit-v2',
        },
        {
            title: 'Better',
            photos: ['lif2.jpg', 'life3.jpg', 'lif2.jpg', 'life3.jpg'],
            tags: ['React', 'Typescript'],
            content:
                'An advanced image classification project using TensorFlow and MobileNetV2 to identify logos. Designed for scalability with a structured dataset and deployed for experimental use cases.',
            link: 'https://example.com/logo-classifier',
        },
        {
            title: 'Custom Discord Bot',
            photos: ['lif2.jpg', 'life3.jpg'],
            tags: ['Javascript', 'Node.js'],
            content:
                'A creative coding project using Framer Motion in React to create animated gradient blobs with dynamic motion paths. Aimed at delivering visually stunning and interactive frontend designs.',
            link: 'https://example.com/dynamic-blob-animation',
        },
    ];

    return (
        <section className="h-fit relative md:h-screen md:relative">
            
            <ParticlesComponent></ParticlesComponent>
            <div className=" relative mt-36 px-8 z-10 w-full md:absolute md:max-w-[60vw] md:right-5 md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
                <Accordion items={accordionItems}></Accordion>
            </div>
            <div className=" relative max-w-[25%] mt-32  md:absolute bottom-5 left-5">
                    <EntranceText
                        title={'Tech'}
                        text={
                            'I thrive at the intersection of creativity and problem-solving, using tech to bring ideas to life. From AI algorithms to engaging frontends, my journey blends innovation, entrepreneurship, and real-world impact.'
                        }
                    ></EntranceText>
                    
                
                <GithubStats></GithubStats>
            </div>
            <div className="absolute z-10 bottom-5 right-5">
               
            </div>
        </section>
    );
}
