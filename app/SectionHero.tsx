"use client";

import { useState, useEffect } from "react";
import { assets } from '@/constant/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TrackVisibility from 'react-on-screen';

interface IAnimateImageProps {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  initial: object;
  animate: object;
  transition: object;
}

const AnimatedImage = motion(Image);
const toRotate = ["UI/UX Designer", "Web Developer", "App Developer"];
const period = 100;

export default function SectionHero(): JSX.Element {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animatedImages: IAnimateImageProps[] = [
    {
      className: 'w-[140px] h-auto lg:w-[180px] lg:h-[120px] absolute top-3 -left-16 z-[1]',
      src: assets.home.hero.zigZag,
      width: 180,
      height: 120,
      alt: '',
      initial: { opacity: 0, x: -100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 0.4, duration: 0.8 },
    },
    {
      className: 'w-[110px] h-auto lg:w-[150px] lg:h-[140px] absolute top-6 -right-12 z-[1]',
      src: assets.home.hero.twistedTorus,
      width: 150,
      height: 140,
      alt: '',
      initial: { opacity: 0, x: 100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 0.6, duration: 0.8 },
    },
    {
      className: 'w-[130px] h-auto lg:w-[170px] lg:h-[170px] absolute bottom-6 -left-14 z-[1]',
      src: assets.home.hero.quadrilateral,
      width: 170,
      height: 170,
      alt: '',
      initial: { opacity: 0, x: -100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 0.8, duration: 0.8 },
    },
    {
      className: 'w-[192px] h-auto lg:w-[242px] lg:h-[202px] absolute bottom-8 -right-24 z-[1]',
      src: assets.home.hero.triangle,
      width: 242,
      height: 202,
      alt: '',
      initial: { opacity: 0, x: 100 },
      animate: inView ? { opacity: 1, x: 0 } : {},
      transition: { delay: 1, duration: 0.8 },
    },
  ];

  return (
    <section ref={ref} className='safe-x-padding mt-10 mb-[172px]' aria-label='Hero Section'>
      <div className='grid grid-flow-row gap-10 xl:grid-cols-2 xl:grid-flow-col xl:gap-0'>
        <div className='flex flex-col items-center justify-center order-2 xl:items-start xl:order-1'>
          <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
            {`#`} <span className="txt-rotate"><span className="wrap">{text}</span></span>
          </h1>
          <motion.h2
            className='font-montserrat font-extrabold text-6xl md:text-[64px] md:leading-[60px] lg:text-[70px] lg:leading-[98px] gradient-text mb-6 text-center xl:text-left'
            aria-label="Web Developer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {`Sayali Zambre`}
          </motion.h2>
          
          <motion.p
            className='text-sm font-medium text-center md:text-base lg:text-lg text-gray-800 xl:text-left'
            aria-label="I'm a passionate Full Stack Software Developer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A passionate full stack software developer 🚀 with expertise in creating dynamic web and mobile applications using JavaScript, React.js, Node.js, React Native, and Next.js, delivering high-quality solutions with modern libraries and frameworks.
          </motion.p>
        </div>
        <div className='xl:order-2'>
          <div className='relative flex items-center justify-center order-1 xl:justify-end'>
            <div className='relative'>
              <motion.div
                className='relative w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] bg-black rounded-3xl overflow-clip'
              >
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <AnimatedImage
                        className='w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] absolute top-0 bottom-0 left-0 right-0'
                        src={assets.home.hero.avatarSmile}
                        width={480}
                        height={480}
                        alt=''
                        priority
                        initial={{ opacity: 0.5, y: 500 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 1 }}
                        aria-label="Avatar"
                      />
                    </div>
                  )}
                </TrackVisibility>
              </motion.div>
              {animatedImages.map((imageProps, index) => (
                <TrackVisibility key={index} once>
                  {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <AnimatedImage
                        className={imageProps.className}
                        src={imageProps.src}
                        width={imageProps.width}
                        height={imageProps.height}
                        alt={imageProps.alt}
                        initial={imageProps.initial}
                        animate={imageProps.animate}
                        transition={imageProps.transition}
                        aria-hidden={!inView}
                      />
                    </div>
                  )}
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
