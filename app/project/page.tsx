"use client";

import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsDribbble, BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    }
];

const projectTypes = [
    {
        slug: 'case-study',
        name: 'Case Study',
    },
    {
        slug: 'real-project',
        name: 'Real Project',
    }
]

const initialProjects = [
    {
        slug: 'Xero App',
        title: 'Xero App',
        image: assets.home.myLatestProject.projects.xero,
        repositoryUrl: "https://github.com/alpharosto/Xero_app",
        demoUrl: "https://drive.google.com/file/d/16Dq1Hk6bjAEuC5RIXJTn8AXWrxzhu_wR/view",
        summary: 'Xero_App is an healthcare application which primary focuses on two uncovered aspect of Health application and Personalisation.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Next JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Healthapp-blockchain',
        title: 'Healthapp-blockchain',
        image: assets.home.myLatestProject.projects.blockchain,
        repositoryUrl: "https://github.com/SayaliZambre/Healthapp-blockchain",
        demoUrl: "https://github.com/SayaliZambre/Healthapp-blockchain",
        summary: 'The medical record storage system utilizing blockchain technology is an innovative solution designed to securely store and manage patient medical records in a decentralized and tamper-proof manner.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Blockchain',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Blockdrive',
        title: 'blockdrive ',
        image: assets.home.myLatestProject.projects.blockdrive_cover,
        repositoryUrl: "https://github.com/SayaliZambre/blockdrive",
        demoUrl: "https://blockdrive_cover",
        summary: 'This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'Solidity',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Bolckchin',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Quiz ',
        title: 'Quiz',
        image: assets.home.myLatestProject.projects.quizapp,
        repositoryUrl: "https://github.com/SayaliZambre/quiz1",
        demoUrl: "https://github.com/SayaliZambre/quiz1",
        summary: 'The MHCET Quiz App is a dedicated platform designed to help students prepare effectively for the Maharashtra Common Entrance Test (MHCET). This interactive app offers a comprehensive collection of practice questions tailored specifically to the MHCET syllabus',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: ' MongoDB',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Ecommerce',
        title: ' Ecommerce',
        image: assets.home.myLatestProject.projects.eCommerce,
        repositoryUrl: "https://github.com/SayaliZambre/EcommerceAI",
        demoUrl: "https://github.com/SayaliZambre/EcommerceAI",
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: ' MongoDB',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Chat-App',
        title: 'Chat-App',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/SayaliZambre/chatapp.io",
        demoUrl: "https://deri.my.id",
        summary: 'A real-time chat application that enables seamless communication with instant messaging, group chats, and multimedia sharing. ',
        techStacks: [
            {
                name: 'Node JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'SoketIo',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },

    {
        slug: 'Chat-App',
        title: 'Chat-App',
        image: assets.home.myLatestProject.projects.Ide,
        repositoryUrl: "https://github.com/SayaliZambre/chatapp.io",
        demoUrl: "https://magical-word-tn7j.vercel.app/",
        summary: 'A real-time chat application that enables seamless communication with instant messaging, group chats, and multimedia sharing. ',
        techStacks: [
            {
                name: 'Node JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'SoketIo',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },

    {
        slug: 'Pokemon',
        title: 'Pokemon',
        image: assets.home.myLatestProject.projects.Ide,
        repositoryUrl: "https://github.com/SayaliZambre/Pokemon",
        demoUrl: "https://pokemon-blush-six.vercel.app/",
        summary: 'Pokemon Game ',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            // {
            //     name: 'React JS',
            //     imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
            //     webUrl: 'https://reactjs.org/'
            // },
            // {
            //     name: 'SoketIo',
            //     imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
            //     webUrl: 'https://nodejs.org/en/'
            // },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },

    {
        slug: 'Drump',
        title: 'Drump',
        image: assets.home.myLatestProject.projects.music,
        repositoryUrl: "https://github.com/SayaliZambre/drump",
        demoUrl: "https://drump.vercel.app/",
        summary: 'Musical Instument ',
        techStacks: [
            {
                name: 'react JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            // {
            //     name: 'React JS',
            //     imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
            //     webUrl: 'https://reactjs.org/'
            // },
            // {
            //     name: 'SoketIo',
            //     imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
            //     webUrl: 'https://nodejs.org/en/'
            // },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Ide',
        title: 'Ide',
        image: assets.home.myLatestProject.projects.Ide,
        repositoryUrl: "https://github.com/SayaliZambre/ide",
        demoUrl: "https://ide-uccj.vercel.app/",
        summary: 'A code editor is a software tool designed for writing and editing source code, offering features like syntax highlighting, code completion, and debugging.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            // {
            //     name: ' JS',
            //     imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
            //     webUrl: 'https://nodejs.org/en/'
            // },
        ],
        projectType: projectTypes[1],
        category: categories[1]
    },
    {
        slug: 'Cryptic',
        title: 'Cryptic',
        image: assets.home.myLatestProject.projects.Cryptic,
        repositoryUrl: "https://github.com/SayaliZambre/cryptic",
        demoUrl: "https://cryptic-zeta.vercel.app/",
        summary: 'A code editor is a software tool designed for writing and editing source code, offering features like syntax highlighting, code completion, and debugging.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png',
                webUrl: 'https://nextjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            // {
            //     name: ' JS',
            //     imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
            //     webUrl: 'https://nodejs.org/en/'
            // },
        ],
        projectType: projectTypes[1],
        category: categories[1]
    },
]

export default function Project() {
    const [projects, setProjects] = useState(initialProjects);
    const [filteredProjects, setFilteredProjects] = useState(initialProjects);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className='safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]'>
            <div className='text-center'>
                <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.2 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Explore Deri&apos;s Project</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className='font-medium text-xl lg:text-2xl text-white max-w-[730px] mx-auto'>Take a look at something I&apos;ve worked on, such as a case study, real project, and more.</motion.p>
            </div>
            <div className='my-[50px] h-full'>
                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out">
                            <Link
                                className="w-full h-full bg-white"
                                href={`/project/${project.slug}`}
                                target="_blank"
                            >
                                <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                                    <div className="relative">
                                        <Image className="object-cover" src={project.image} alt={`${project.title} thumbnail`} />
                                        <div className="absolute top-0 right-0 p-2 bg-black z-[1] text-white rounded-bl-2xl text-sm hover:opacity-0 transition-all duration-500 ease-in-out">
                                            {project.projectType.name}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 px-6 py-3">
                                        <div className="flex flex-row flex-wrap gap-x-4">
                                            {project.techStacks.map((techStack, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={inView ? { opacity: 1 } : {}}
                                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                    className="p-1 bg-white border-[0.5px] border-gray/70 rounded-full hover:cursor-help"
                                                >
                                                    <Image
                                                        src={techStack.imageUrl}
                                                        alt={`${techStack.name} icon`}
                                                        loader={({ src }) => src}
                                                        width={36}
                                                        height={36}
                                                        title={techStack.name}
                                                        unoptimized
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 py-4">
                                    <h5 className="mb-2 text-base font-bold line-clamp-1">{project.title}</h5>
                                    <p className="text-sm font-normal line-clamp-2">{project.summary}</p>
                                    <div className="grid grid-flow-col gap-4 mt-4">
                                        {project.demoUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.demoUrl, '_blank', 'utm_source=deri.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1">
                                                <span>
                                                    {project.category.slug === 'design' ?
                                                        "See Prototype"
                                                        :
                                                        "Visit Demo"
                                                    }
                                                </span>
                                                <IoMdOpen />
                                            </button>
                                        )}

                                        {project.repositoryUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.repositoryUrl, '_blank', 'utm_source=deri.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                rel="noopener noreferrer"
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1"
                                            >
                                                {project.category.slug === 'design' ? (
                                                    <>
                                                        <span>Dribble</span>
                                                        <BsDribbble />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Github</span>
                                                        <BsGithub />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

    )
}
