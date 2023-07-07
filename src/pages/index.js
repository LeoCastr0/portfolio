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

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1ZchHjfDsW095Pi7AMqgvbZKdjZG6CLxd/view?usp=drive_link';
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
        <nav className="p-5 mb-12 flex justify-between sticky top-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl rounded-t-none z-10">
          <h1 className="text-xl font-burtons dark:text-gray-100">Developed by Leonardo</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-300" /></li>
            <li><a className="bg-gray-300 text-teal-800 px-4 py-2 rounded-md ml-8" href="#" onClick={handleDownload}>Resume</a></li>
          </ul>
        </nav>
        <section className="min-h-screen">
          <div className="text-center p-2">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Leonardo Castro</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-100">Full-Stack JavaScript Developer</h3>
            <p className="tex-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl max-w-xl mx-auto">Developer providing frontend and backend services. Point down below and let's get checking</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
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
            <h3 className="text-3xl py-1 dark:text-gray-100">Summary</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Highly skilled and proficient in various aspects of web development, I possess a strong command of the <span className="text-teal-500">English</span> language and excel in <span className="text-teal-500">JavaScript</span>,
              <span className="text-teal-500">Node.js</span>, <span className="text-teal-500">React.js</span>, <span className="text-teal-500">HTML</span>, <span className="text-teal-500">CSS</span>, <span className="text-teal-500">Tailwind</span>, and <span className="text-teal-500">Bootstrap</span>.
              With a solid foundation in these technologies, I have consistently delivered high-quality solutions and contributed to the successful development of numerous projects.
              My extensive knowledge and expertise in these areas allow me to effectively design, develop, and implement engaging and user-friendly web applications.
              Additionally, my strong <span className="text-teal-500">problem-solving</span> abilities and attention to detail enable me to tackle complex challenges and deliver efficient solutions.
              With a passion for staying up to date with the latest industry trends, I consistently strive to enhance my skills and ensure that my work remains innovative and cutting-edge.
              Through my commitment to excellence and a proven track record of success, I am well-equipped to contribute to any team or project that requires expertise in <span className="text-teal-500">English</span>, <span className="text-teal-500">JavaScript</span>, <span className="text-teal-500">Node.js</span>, <span className="text-teal-500">React.js</span>, <span className="text-teal-500">HTML</span>, <span className="text-teal-500">CSS</span>, <span className="text-teal-500">Tailwind</span>, and <span className="text-teal-500">Bootstrap</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={design} className="mx-auto" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Frontend</h3>
              <p className="py-2 dark:text-gray-400">Creating elegant frontend responsive interfaces to provide the best UX for the users.</p>
              <h4 className="py-4 text-teal-600 font-bold">Frontend stacks</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">React.js and Redux</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">CSS and HTML</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Tailwind and Bootstrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={code} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Backend</h3>
              <p className="py-2 dark:text-gray-400">Developing efficient APIs to provide processed data to the frontend and to other applications</p>
              <h4 className="py-4 text-teal-600 font-bold">Backend stacks</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Node.js and Express</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Mongo.db and Mongoose</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">SQLServer and PLSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={languages} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Languages</h3>
              <p className="py-2 dark:text-gray-400">Ability to speak fluently more then one language, to be able to communicate with the team.</p>
              <h4 className="py-4 text-teal-600 font-bold">Languages that I speak</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Portuguese - Native</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">English - Fluent</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Spanish - Basis</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 dark:text-gray-100">Relevant Companies that I've worked for </h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={languages} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Companio OU</h3>
              <p className="py-2 dark:text-gray-400">FullStack JavaScript Engineer</p>
              <h4 className="py-4 text-teal-600 font-bold">Activities</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Developed new features and enhancements in both frontend and backend using JavaScript as the primary programming language.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Conducted source code analysis to identify and correct the root causes of issues.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Participated in weekly video meetings with a multicultural and multilingual development team to align on project needs, improvements, and tasks.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Hosted Knowledge Sharing sessions for all company employees to promote learning and knowledge exchange.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Took initiative to dive into new projects aimed at enhancing the company's system.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Utilized Git as the version control system and GitHub as remote repositories for efficient code management.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Developed new features using React.js and Redux for frontend development.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Integrated third-party applications with company APIs to improve system functionality and connectivity.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={languages} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Tata Consultancy Services</h3>
              <p className="py-2 dark:text-gray-400">Systems Support analyst</p>
              <h4 className="py-4 text-teal-600 font-bold">Activities</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Actively read source code to identify root causes of problems and implement necessary corrections.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Provide user support for systems, including ADM system (ERP) and JDE Oracle Origination.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Deliver training to new team members and develop process optimization strategies.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Prepare Procedure Operation Process (POP) manuals for system operations.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Generate reports using Microsoft SQL Server and Toad (Oracle) to support audits and business activities.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Collaborate with fiscal and accounting teams for monthly closing to ensure compliance.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Demonstrate expertise in problem-solving and bug resolution for web systems developed by the company.</p>
            </div>
          </div>
        </section>
        <footer>
          <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center rounded-xl ">
            <p className="font-burtons text-2xl pt-3">Thank you for visiting my Portfolio</p>
            <p className="font-bold text-xl mb-3">These are my contacts:</p>
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
