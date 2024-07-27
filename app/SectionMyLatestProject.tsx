"use client";

import { useEffect, useState } from 'react';
import { assets } from '@/constant/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsGithub, BsInfoCircle } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { FiFigma } from 'react-icons/fi';
import styles from "./home.module.css";




const tabs = [
    {
        name: 'Project',
        image: assets.home.myLatestProject.suitcase,
        data: [
            {
                slug: 'xero',
                title: 'Dhanwantari-app',
                image: assets.home.myLatestProject.projects.xero,
                repositoryUrl: "https://github.com/alpharosto/Xero_app",
                demoUrl: "https://drive.google.com/file/d/1bRsyDeOmbKRdPyseRg9yHiNrt-ds18CK/view?usp=sharing",
            },
            {
                slug: 'Healthapp-blockchain',
                title: 'Healthapp-blockchain',
                image: assets.home.myLatestProject.projects.blockchain,
                repositoryUrl: "https://github.com/SayaliZambre/Healthapp-blockchain",
                demoUrl: "https://github.com/SayaliZambre/Healthapp-blockchain",
            },
            {
                slug: 'quizapp',
                title: 'Quiz-app',
                image: assets.home.myLatestProject.projects.quizapp,
                repositoryUrl: "https://github.com/SayaliZambre/quiz1",
                demoUrl: "https://github.com/SayaliZambre/quiz1",
            },
            {
                slug: 'blockdrive',
                title: 'Blockdrive',
                image: assets.home.myLatestProject.projects.blockdrive_cover,
                repositoryUrl: "https://github.com/SayaliZambre/Discussify",
                demoUrl: "https://blockdrive_cover",
            },
            {
                slug: 'Chat app',
                title: 'Chat-app',
                image: assets.home.myLatestProject.projects.Ide,
                repositoryUrl: "https://github.com/SayaliZambre/chat-app",
                demoUrl: "https://magical-word-tn7j.vercel.app/",
            },
            {
                slug: 'Elite',
                title: 'Elite Website',
                image: assets.home.myLatestProject.projects.Elite,
                repositoryUrl: "https://github.com/SayaliZambre/Elite",
                demoUrl: "https://official-elite.vercel.app/",
            },
            {
                slug: 'Ecommerce',
                title: 'EccomerceAI',
                image: assets.home.myLatestProject.projects.eCommerce,
                repositoryUrl: "https://github.com/SayaliZambre/EcommerceAI",
                demoUrl: "hd",
            },
            {
                slug: 'music',
                title: 'Music',
                image: assets.home.myLatestProject.projects.music,
                repositoryUrl: "https://github.com/SayaliZambre/music",
                demoUrl: "https://665629ad5392b1822edc1b2c--lucent-zuccutto-bb0698.netlify.app/",
            },
            {
                slug: 'Ide',
                title: 'Ide',
                image: assets.home.myLatestProject.projects.Ide,
                repositoryUrl: "https://github.com/SayaliZambre/ide",
                demoUrl: "https://ide-uccj.vercel.app/",
            },
            {
                slug: 'Cryptic',
                title: 'Cryptic',
                image: assets.home.myLatestProject.projects.Cryptic,
                repositoryUrl: "https://github.com/SayaliZambre/cryptic",
                demoUrl: "https://cryptic-zeta.vercel.app/",
            },
            
        ]
    },
    {
        name: 'Code',
        image: assets.home.myLatestProject.Code,
        data: [
            {
                slug: 'portfolio-web-design',
                title: 'Leetcode',
                image: assets.home.myLatestProject.projects.leetcode,
                // repositoryUrl: "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
                demoUrl: "https://leetcode.com/u/G_root/",
            },
            {
                slug: 'Hackerrank ',
                title: 'Hackerrank',
                image: assets.home.myLatestProject.projects.Hackerrank,
                // repositoryUrl: "https://www.geeksforgeeks.org/user/2021berazj/",
                demoUrl: "https://www.hackerrank.com/profile/2021bec086",            },
            {
                slug: 'Codechafe',
                title: 'Codechafe',
                image: assets.home.myLatestProject.projects.Codechafe,
                // repositoryUrl: "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
                demoUrl: "https://www.codechef.com/users/sayali06",
            },
            {
                slug: 'GFG ',
                title: 'GFG ',
                image: assets.home.myLatestProject.projects.gfg,
                // repositoryUrl: "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
                demoUrl: "https://www.geeksforgeeks.org/user/2021berazj/",
                
            },
        ],
    },

    {
        name: 'Certificate',
        image: assets.home.myLatestProject.rocket,
        data: [
            {
                slug: 'portfolio-web-design',
                title: 'Portfolio Web Design',
                image: assets.home.myLatestProject.projects.portfolioWebsite,
                repositoryUrl: "https://www.figma.com/file/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?type=design&node-id=49%3A26&t=3Bwr9eEa8OLH9C0R-1",
                demoUrl: "https://www.figma.com/proto/TYBBBbA5cvBN4QU70hNxvr/DK-PORTFOLIO?page-id=0%3A1&type=design&node-id=49-26&viewport=-226%2C241%2C0.42&scaling=min-zoom",
            },
        ],
    },
];

// tabs.push({
//     name: 'More',
//     image: assets.home.myLatestProject.rocket,
//     data: []
// });


export default function SectionMyLatestProject() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab && !isNaN(parseInt(tab))) {
            setActiveTab(parseInt(tab));
        }
    }, []);

    const handleTabChange = (index: number) => {
        if (index === tabs.length - 1) {
            router.push('/project');
            return;
        }
        setActiveTab(index);
        window.history.pushState({}, '', `?tab=${index}`);
    };

    
    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label='My Latest Project Section'>
               <div className='text-center'>
                <motion.h2 
                    initial={{ y: 100, opacity: 0 }} 
                    animate={inView ? { y: 0, opacity: 1 } : {}} 
                    transition={{ duration: 0.5 }} 
                    className={styles.sectionTitle}
                >
                    My Latest Project
                </motion.h2>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.7 }}
                    className={`${styles.sectionDescription} max-w-[706px] mx-auto text-white`}
                >
                    Take a look at something I&apos;ve worked on, such as a case study, real project, and more
                </motion.p>
            </div>
            <div className='mt-[50px] h-full'>
                <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                    <div className='flex flex-row md:flex-col bg-black p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]'>
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={index}
                                className={`relative ${activeTab === index ? 'gradient-bg' : 'bg-white'} w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                onClick={() => handleTabChange(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={tab.image}
                                    alt={tab.name}
                                    width={100}
                                    height={100}
                                    style={{ height: 'auto' }}
                                />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                                    <p className={`${activeTab === index ? 'text-white' : 'text-accent'} font-bold transition-colors duration-75 ease-in-out`}>{tab.name}</p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                    <div className='overflow-hidden'>
                        <div className='bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto'>
                            <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                                {tabs[activeTab].data.map((item, dataIndex) => (
                                    <motion.div
                                        key={dataIndex}
                                        className="relative col-span-12 overflow-hidden group xl:col-span-6"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="col-span-6">
                                            <motion.div
                                                className="bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                            >
                                                <Image
                                                    className="object-contain w-full h-auto"
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={441}
                                                    height={261}
                                                    priority
                                                />
                                            </motion.div>
                                        </div>
                                        <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl'>
                                            <div className='flex flex-col items-center justify-center w-full h-full select-none lg:select-auto'>
                                                <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.title}</p>
                                                <div className='flex flex-row gap-4 text-3xl'>
                                                    {item.repositoryUrl && (
                                                        <Link
                                                            className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                            href={item.repositoryUrl}
                                                            target='_blank'
                                                            title="Repository"
                                                        >
                                                            {tabs[activeTab].name.toLowerCase() === "project" ? (
                                                                <BsGithub />
                                                            ) : (
                                                                <FiFigma />
                                                            )}
                                                        </Link>
                                                    )}
                                                    {item.demoUrl && (
                                                        <Link
                                                            className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                            href={item.demoUrl}
                                                            target='_blank'
                                                            title="Demo"
                                                        >
                                                            <IoMdOpen />
                                                        </Link>
                                                    )}
                                                    <Link 
                                                        className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary" 
                                                        href={`/project/${item.slug}`} 
                                                        title={`Detail of ${item.title}`}
                                                    >
                                                        <BsInfoCircle />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}