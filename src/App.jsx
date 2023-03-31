import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from 'react-icons/io5';

function App() {
  const appRef = useRef();
  const timelineRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animations
      timelineRef.current = gsap.timeline();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="hero"
        className="md:container h-[100svh] flex flex-col justify-evenly items-center "
      >
        <hgroup className="grid grid-cols-2">
          <h1 className=" col-span-2 place-self-center text-[5rem] ">
            Sreekanth D
          </h1>
          <h2 className="text-base">Digital Craftsman</h2>
          <h3 className="place-self-end">Artist/Designer/Developer</h3>
        </hgroup>
        <div className="max-w-24 grid grid-cols-2 gap-2   ">
          <p className="text-2xl max-w-[38ch] place-content-end">
            I will help you turn your ideas into a functional and aesthetically
            pleasing experience.
          </p>
          <div className="flex flex-col gap-1 place-self-center ">
            <span className="text-xl font-bold text-violet-500">
              Available for freelance work
            </span>
            <span className="text-2xl font-semibold">
              inbox.sreekanthd@gmail.com
            </span>
            <ul className="flex flex-row gap-2">
              <li>
                <a href="">Github</a>
              </li>
              <li className="text-violet-500">•</li>
              <li>
                <a>LinkedIn</a>
              </li>
            </ul>
          </div>
          <nav className="flex flex-row gap-4">
            <a
              href="#portfolio"
              className=" box-border w-48 h-16 bg-violet-500 flex flex-row justify-center items-center gap-2 text-md font-bold"
            >
              See my works <IoArrowDownCircleOutline size={24} />
            </a>
            <a
              href="#about-me"
              className=" box-border w-48 h-16 border-solid border-violet-500 border-2 text-violet-500 flex flex-row justify-center items-center gap-2 text-md font-bold"
            >
              More about me <IoArrowDownCircleOutline size={24} />
            </a>
          </nav>
        </div>
      </section>
      <section
        id="about-me"
        className="md:container h-[100svh] flex flex-col justify-evenly items-center "
      >
        <div className="grid grid-cols-2 grid-rows-2">
          <h1 className="section-title">ABOUT ME</h1>
          <p className="w-[56ch] row-start-2 first-letter:text-2xl first-letter:text-violet-500">
            I am a self taught artist, designer and developer based in Kerala,
            India. I am a Mathematics post graduate and Computer science
            researcher who has great passion for art and engineer. I like using
            my knowledge in multiple fields for problem solving, implementing
            them for other to use. I like challenging myself and expanding my
            creative limits.
          </p>
          <img
            src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            height={64}
            width={64}
            className="w-64 h-64 aspect-square object-cover rounded-full row-span-2 place-self-end"
          />
        </div>
        <div className=" md:container md:px-24 flex flex-col p-4 gap-4">
          <h1 className="">Why work with me?</h1>
          <ul className="reasons  flex flex-row gap-4">
            <li>
              <h2>Flexible & Experienced</h2>
              <p>
                I have the advantage of working in multiple disciples, different
                tools and tech stack.
              </p>
            </li>
            <li>
              <h2>Value for money</h2>
              <p>
                Fair charge is my policy. You will get the worth for what you
                spend, with max of 3 reiterations till you are satisfied or
                money back.
              </p>
            </li>
            <li>
              <h2>Extension of your team</h2>
              <p>I know that we get the best results when combine forces.</p>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="portfolio"
        className="w-full min-h-[100svh] flex flex-col justify-start items-center  "
      >
        <header className="pt-4 md:container sticky top-0 dark:bg-black border-solid dark:border-slate-900 border-b-2">
          <h1 className="section-title">Portfolio</h1>
        </header>
        <div className=" w-full h-fit p-2"></div>
      </section>
      <footer className="w-full bg-violet-500 p-2 flex flex-row items-center justify-center gap-4">
        <a
          href="#hero"
          className="flex flex-row items-center justify-center gap-2"
        >
          Go to Top <IoArrowUpCircleOutline size={32} />
        </a>
      </footer>
    </>
  );
}

export default App;
