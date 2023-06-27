import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaWhatsapp } from 'react-icons/fa';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import deved from "../public/main/dev-ed-wave.png";
import music from "../public/project/music.svg";
import hosp from "../public/project/hosp.svg";
import stats from "../public/project/stats.svg";
import Image from "next/image";

import mern from "../public/cert/mern.png";
import stemaspire from "../public/cert/stemaspire.png";
import web3 from "../public/project/web3.png";
import web4 from "../public/project/web4.png";
import web5 from "../public/project/web5.png";
import web6 from "../public/project/web6.png";


import java from "../public/skills/java.svg"
import git from "../public/skills/git.svg"
import linux from "../public/skills/linux.svg"
import python from "../public/skills/python.svg"
import reactIcon from "../public/skills/react.svg"
import tailwind from "../public/skills/tailwind.svg"
import ml from "../public/skills/ml.svg"
import html from "../public/skills/html.svg"
import css from "../public/skills/css.svg"
import javascript from "../public/skills/javascript.svg"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
   };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Natasya Khoo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-black md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
              <a href="/api/download" download="Natasya Khoo Resume.pdf" 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"> Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-cyan-400 font-medium dark:text-cyan-400 md:text-6xl">
              /natasyakhoo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer | Freelance Data Analyst
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Relentless dream chaser fueled by ambition and caffeine
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/natasyakhoo/" target="_blank"><AiFillLinkedin /></a>
              <a href="https://github.com/Sashakhoo" target="_blank"><AiFillGithub /></a>
              <a href="https://wa.link/mdmgqz" target="_blank"><FaWhatsapp /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <hr></hr>
        <section style={{ marginBottom: '20px' }}>
        <div>
            <h3 className="text-2xl font-bold flex justify-center py-5 dark:text-white ">SKILLS</h3>
                <Slider {...settings}>
                <SkillCard name="linux"  img={linux} />
                <SkillCard name="python"  img={python} />
                <SkillCard name="java"  img={java} />
                <SkillCard name="react"  img={reactIcon} />
                <SkillCard name="tailwind"  img={tailwind} />
                <SkillCard name="machine learning"  img={ml} />
                <SkillCard name="git" img={git} />
                <SkillCard name="html" img={html} />
                <SkillCard name="css" img={css} />
                <SkillCard name="javascript"  img={javascript} />
                </Slider>
            </div>
        </section>
        <hr></hr>
        <section>
          <div >
            <h3 className="text-2xl font-bold flex justify-center py-10 dark:text-white border-cyan-300">PROJECTS</h3>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={music} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Lyrics Based Emotion Classification
              </h3> 
              <div className="flex justify-center">
              <a href="https://github.com/Sashakhoo/Lyrics-based-Emotion-Classification" target="_blank" className="inline-flex items-center">
              <AiFillGithub size ={30}/>
              </a>
            </div>
              <p className="py-2">
              A project of classifying human emotion using Malay patriotic song as dataset and NRC Emotion Lexicon as a guideline for final output. Four Machine Learning model was used in training the data for a better classifying task. The final output consists of 8 classified emotion as it can turn into a dashboard application that can help musicians and lyricist come up with better idea on writing lyrics that can help motivate the people to invoke feelings of patriotism in them.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={hosp} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Symptom Based Disease Classification
              </h3>
              <div className="flex justify-center">
              <a href="https://github.com/Sashakhoo/Lyrics-based-Emotion-Classification" target="_blank" className="inline-flex items-center">
              <AiFillGithub size ={30}/>
              </a>
            </div>
              <p className="py-2">
              A collaboration of computer science and healthcare students that work together to accomplish a user friendly prediagnosis NCDs website. The whole project is completed within a month time from training to deploy the Machine Learning model to websites.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={stats} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Hotel Cancellation Booking data-viz</h3>
                <div className="flex justify-center">
              <a href="https://github.com/Sashakhoo/Lyrics-based-Emotion-Classification" target="_blank" className="inline-flex items-center">
              <AiFillGithub size ={30}/>
              </a>
            </div>
              <p className="py-2">
              Aims to provide a visual representation of hotel booking data related to cancellations. By analyzing and presenting the data in a visually appealing manner, this project allows users to gain insights into patterns, trends, and factors influencing hotel booking cancellations. It helps stakeholders in the hospitality industry and related fields to make informed decisions and implement strategies to optimize booking management and reduce cancellations.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
          <hr></hr>
            <h3 className="text-2xl font-bold flex justify-center py-10 dark:text-white ">CERTIFICATES</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={mern}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"140%"}
                height={"100%"}
                layout="responsive"
                src={stemaspire}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
