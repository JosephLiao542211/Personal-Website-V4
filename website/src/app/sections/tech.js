import React from 'react';
import EntranceText from '../component/EntranceText';
import ParticlesComponent from '../component/particless';
import Accordion from '../component/Accordian/accordcontainer';
import SocialLink from '../component/sociallink';
import GithubStats from '../component/Githubstats';
import TechDisplay from '../component/TechDisplay/techdisplay';
export default function TechSection() {
    const accordionItems = [
        {
            title: 'Local Reach',
            photos: ['gingerbread.JPG', 'life3.jpg'],
            video: 'HIW2.mp4',
            icon: 'lrIcon.png',
            projectType: 'Startup',
            tags: ['TensorFlow', 'OpenCV', 'React', 'Python', 'IoT'],
            content:
                'A computer vision startup developing lightweight AI algorithms for ad detection in commercial spaces. Achieved 96% detection accuracy using TensorFlow and OpenCV, deployed at 5 restaurants, generating over $3,000 in revenue in 5 months. Raised $60,000 in funding and participated in incubators like QYourVenture and Startup Survivor.',
            link: 'https://thelocalreach.ca/',
        },
        {
            title: 'Dear Journal',
            photos: ['Qhackpic.jpg', 'life3.jpg'],
            video: '',
            icon: 'qhacks.png',
            projectType: 'Hackathon',
            tags: ['React Native', 'Javascript'],
            content:
                'A React Native app that streams live footage from a Raspberry Pi camera. Utilizes GStreamer for low-latency streaming and includes backend integration for seamless video playback.',
            link: 'https://example.com/livestream-app',
        },
        {
            title: 'Fight Labs',
            photos: ['FightLabTech.png', 'fightlab2.jpg'],
            video: '',
            icon: 'Hackmiticon.png',
            projectType: 'Hackathon',
            tags: ['React', 'C++', 'IoT'],
            content:
                "An IoT-enabled React app integrated with Arduino sensors for tracking punching data. Displays real-time stats like punch velocity and provides training advice using OpenAI's API, combining hardware and software in an engaging way.",
            link: 'https://example.com/boxing-data-analyzer',
        },
        {
            title: 'Stumble',
            photos: ['stumbleInfo.jpg', 'life3.jpg'],
            video: '',
            icon: 'stumbleicon.png',
            projectType: 'Hackathon',
            tags: ['React', 'Typescript', 'ExpressJS'],
            content:
                'A Next.js web application built as part of a competitive hackathon project. Features a polished frontend and innovative solutions designed to meet the hackathon\'s theme and goals.',
            link: 'https://example.com/hackmit-v2',
        },
        {
            title: 'Better',
            photos: ['betterinfo.png', 'life3.jpg', 'lif2.jpg', 'life3.jpg'],
            video: '',
            icon: 'better.png',
            projectType: 'Blockchain',
            tags: ['React', 'Typescript'],
            content:
                'An advanced image classification project using TensorFlow and MobileNetV2 to identify logos. Designed for scalability with a structured dataset and deployed for experimental use cases.',
            link: 'https://example.com/logo-classifier',
        },
        {
            title: 'Cats Cradle',
            photos: ['catscradleinfo.png', 'life3.jpg'],
            icon: 'catscradle.png',
            projectType: 'Personal Project',
            tags: ['Javascript', 'Node.js'],
            content:
                'A creative coding project using Framer Motion in React to create animated gradient blobs with dynamic motion paths. Aimed at delivering visually stunning and interactive frontend designs.',
            link: 'https://example.com/dynamic-blob-animation',
        },
    ];

    return (
        <section className="h-fit relative md:h-screen md:relative p-5">
            
            <ParticlesComponent></ParticlesComponent>
            <div className='flex items-end justify-between' >
                <div className=" mx-5 w-1/4 ">
                        <EntranceText
                            title={'Tech'}
                            text={
                                'I thrive at the intersection of creativity and problem-solving, using tech to bring ideas to life.'
                            }
                        ></EntranceText>
                        
                    
                    <GithubStats></GithubStats>
                </div>
                <div className=" flex-1 relative px-8 z-10">
                {/* <Accordion items={accordionItems}></Accordion> */}
                    <TechDisplay accordionItems={accordionItems}></TechDisplay> 
                </div>
                
            </div>
        </section>
    );
}
