import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image"
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Leonardo Castro Portifolio</title>
        <meta name="description" content="Created by Leonardo Castro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-100">Developed by Leonardo</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-300" /></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Leonardo Castro</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-100">Full-Stack JavaScript Developer</h3>
            <p className="tex-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl max-w-xl mx-auto">Freelancer providing services programming and design content needs. jpoin down below and let's get checking!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Since the beginning of my journey as a freelance developer, I've done remote work for 
              <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talanted people to create digital products for foth both business and customer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
             I offer a full-stack developer service with the most updated features such as node.js and react.js
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={design} className="mx-auto" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Beautiul Designs</h3>
              <p className="py-2 dark:text-gray-400">Creating elegant designs suited for you needs following core desing theory.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={code} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Beautiul Designs</h3>
              <p className="py-2 dark:text-gray-400">Creating elegant designs suited for you needs following core desing theory.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-gray-600">
              <Image src={consulting} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-100">Beautiul Designs</h3>
              <p className="py-2 dark:text-gray-400">Creating elegant designs suited for you needs following core desing theory.</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">Portifolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              Since the beginning of my journey as a freelance developer, I've done remote work for 
              <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talanted people to create digital products for foth both business and customer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
             I offer a full-stack developer service with the most updated features such as node.js and react.js
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout={'responsive'}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout={'responsive'}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout={'responsive'}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout={'responsive'}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout={'responsive'}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" height={'100%'} width={'100%'} layout={'responsive'}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
