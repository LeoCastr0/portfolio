import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
  AiFillInstagram
} from 'react-icons/ai'
import Image from "next/image"
import leonardo from '../../public/profile-pic.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import languages from '../../public/language.png'
import { useState } from "react";
import {FormattedMessage} from 'react-intl'
import { useRouter } from 'next/router';

export default function Home({locale}) {
  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter()

  const onChangeLanguage = (lang) => (e) => {
    e.preventDefault();
    if(lang === 'pt') {
      router.push('pt');
    } else {
      router.back();
    }
  }

  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1mkGucsrHm76GoSKAXfmVCbayW742-oFz/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'resume.pdf'
    link.click();
  };

  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Leonardo Castro Portfolio</title>
        <meta name="description" content="Created by Leonardo Castro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <nav className="p-5 mb-6 flex justify-between md:sticky top-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl rounded-t-none z-10">
          <h1 className="text-xl font-burtons dark:text-gray-100">Developed by Leonardo</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-300" /></li>
            <li><a className="bg-gray-300 text-teal-800 px-4 py-2 rounded-md ml-8" href="#" onClick={handleDownload}>
              <FormattedMessage id="resume" defaultMessage="Resumé" />
            </a></li>
          </ul>
        </nav>
        <section className="min-h-screen min-w-screen">
          <div className="flex justify-end">
          <a href="#" className="cursor-pointer mx-2 hover:underline decoration-teal-500 dark:text-gray-300" onClick={onChangeLanguage('en')}>English</a>
          <a href="#" className="cursor-pointer mx-2 hover:underline decoration-teal-500 dark:text-gray-300" onClick={onChangeLanguage('pt')}>Portuguese</a>
          </div>
          
          <div className="text-center p-2">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Leonardo Castro</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-100">Full-Stack JavaScript Developer</h3>
            <p className="tex-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl max-w-xl mx-auto">
              <FormattedMessage id="introduction_header" defaultMessage="Developer offering frontend and backend services. See below for more details about my profile." />
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-12 md:gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/leocastroHP" target="_blank"><AiFillTwitterCircle /></a>
            <a href="https://www.instagram.com/leocastrosl/" target="_blank"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/leonardo-fagundes-de-castro/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/LeoCastr0" target="_blank"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={leonardo} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100 text-center md:text-left"><FormattedMessage id="summary" defaultMessage="Summary" /></h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              <FormattedMessage id="summary_text_1"/><span className="text-teal-500"><FormattedMessage id="english" /> </span><FormattedMessage id="summary_text_2"/><span className="text-teal-500">JavaScript</span>,
              <span className="text-teal-500"> Node.js</span>, <span className="text-teal-500">React.js</span>, <span className="text-teal-500">HTML</span>, <span className="text-teal-500">CSS</span>, <span className="text-teal-500">Tailwind</span>,
              <FormattedMessage id="and" /> <span className="text-teal-500">Bootstrap</span>.
              <FormattedMessage id="summary_text_3" />
              <FormattedMessage id="summary_text_4" /><span className="text-teal-500">problem-solving</span> <FormattedMessage id="summary_text_5" />
              <FormattedMessage id="summary_text_6" /> <span className="text-teal-500"><FormattedMessage id="english" /></span>, <span className="text-teal-500">JavaScript</span>, <span className="text-teal-500">Node.js</span>,
              <span className="text-teal-500"> React.js</span>,<span className="text-teal-500"> HTML</span>, <span className="text-teal-500">CSS</span>, <span className="text-teal-500">Tailwind</span>,
              <FormattedMessage id="and" /><span className="text-teal-500"> Bootstrap</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={design} className="mx-auto" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Frontend</h3>
              <p className="py-2 dark:text-gray-400"><FormattedMessage id="frontend_text"/> </p>
              <h4 className="py-4 text-teal-600 font-bold">Frontend stacks</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">React.js - Redux</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">CSS - HTML</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Tailwind - Bootstrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={code} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Backend</h3>
              <p className="py-2 dark:text-gray-400"><FormattedMessage id="backend_text" /></p>
              <h4 className="py-4 text-teal-600 font-bold">Backend stacks</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Node.js and Express</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Mongo.db and Mongoose</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">SQLServer and PLSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={languages} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Languages</h3>
              <p className="py-2 dark:text-gray-400"><FormattedMessage id="languages_text" /></p>
              <h4 className="py-4 text-teal-600 font-bold"><FormattedMessage id="languages_i_speak" /></h4>
              <p className="text-gray-800 py-1 dark:text-gray-300"><FormattedMessage id="portuguese_level" /></p>
              <p className="text-gray-800 py-1 dark:text-gray-300"><FormattedMessage id="english_level" /></p>
              <p className="text-gray-800 py-1 dark:text-gray-300"><FormattedMessage id="spanish_level" /></p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 dark:text-gray-100 text-center md:text-left"><FormattedMessage id="relevant_companies_text" /></h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={languages} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Companio OU</h3>
              <p className="py-2 dark:text-gray-400">FullStack JavaScript Engineer</p>
              <h4 className="py-4 text-teal-600 font-bold"><FormattedMessage id="activities" /></h4>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_1"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_2"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_3"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_4"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_5"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_6"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_7"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="companio_activity_8"/></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={languages} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Tata Consultancy Services</h3>
              <p className="py-2 dark:text-gray-400">Systems Support analyst</p>
              <h4 className="py-4 text-teal-600 font-bold"><FormattedMessage id="activities"/></h4>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tsc_activity_1"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tcs_activity_2"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tcs_activity_3"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tcs_activity_4"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tcs_activity_5"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tcs_activity_6"/></p>
              <p className="text-gray-800 py-1 dark:text-gray-300 text-left md:text-center"><FormattedMessage id="tcs_activity_7"/></p>
            </div>
          </div>
        </section>
        <footer>
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center rounded-xl ">
            <p className="font-burtons text-2xl pt-3"><FormattedMessage id="thank_you"/></p>
            <p className="font-bold text-xl mb-3"><FormattedMessage id="contact"/> </p>
            <div className="flex justify-center">
              <AiFillMail className="text-xl"/><p className="mx-2">leonardofagundescastro@gmail.com</p>
            </div>
            <div className="flex justify-center pb-3">
              <AiFillPhone className="text-xl"/><p className="mx-2">+55 (16) 99792-6365</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
export function getStaticProps({ locale }) {
  return {
    props: {
      locale: locale,
    },
  };
}