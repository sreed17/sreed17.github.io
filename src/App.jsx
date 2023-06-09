import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
  IoLink,
} from 'react-icons/io5';
import PortfolioItem from './components/PortfolioItem';

function App() {
  const appRef = useRef();
  const timelineRef = useRef();
  const prevElemRef = useRef();
  const pHeaderRef = useRef();

  useLayoutEffect(() => {
    const pHeader = pHeaderRef.current;
    const prevElem = prevElemRef.current; // Points to the elem just above the sticky header
    // Defining an Interaction Observer
    const options = { root: null, rootMargin: '0px', threshold: 0.01 };
    const iCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const reqFlag =
          !entry.isIntersecting && entry.boundingClientRect.top <= 0;
        if (reqFlag) pHeader.classList.add('portfolio-fixed-header');
        else pHeader.classList.remove('portfolio-fixed-header');
      });
    };
    const iObserver = new window.IntersectionObserver(iCallback, options);

    // Interaction target

    iObserver.observe(prevElem);

    // Animations using gsap
    let ctx = gsap.context(() => {
      // Animations
      timelineRef.current = gsap.timeline();
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="hero">
        <hgroup className="grid grid-flow-row place-content-center ">
          <h1 className="text-[3rem] font-bold place-self-center lg:text-[5rem] lg:col-span-2 leading-none">
            Sreekanth D
          </h1>
          <h2 className="text-xl font-semibold place-self-center lg:place-self-start lg:row-start-2">
            Digital Craftsman
          </h2>
          <h3 className="text-sm p-1 place-self-center lg:place-self-end lg:row-start-2">
            Artist / Designer / Developer
          </h3>
        </hgroup>
        <div className="grid grid-flow-row gap-8 px-8">
          <p className="text-xl lg:max-w-[30ch] lg:text-3xl">
            I will help you turn your ideas into a functional and aesthetically
            pleasing experience.
          </p>
          <div className="flex flex-col w-full lg:col-start-2">
            <span className=" text-violet-400 lg:text-xl">
              Available for freelance work
            </span>
            <span className="font-bold text-lg lg:text-2xl lg:font-semibold">
              inbox.sreekanthd@gmail.com
            </span>
            <ul className="flex flex-row gap-2">
              <li>
                <a href="https://github.com/sreed17" className="social-link">
                  Github
                </a>
              </li>
              <li className="text-violet-500">•</li>
              <li>
                <a
                  href="https://in.linkedin.com/in/sreekanth-d-787726b8"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="flex flex-row gap-4 items-center justify-center flex-wrap">
          <a href="#portfolio" className="btn-fill">
            See my works <IoArrowDownCircleOutline size={24} />
          </a>
          <a href="#about-me" className=" btn-outline">
            More about me <IoArrowDownCircleOutline size={24} />
          </a>
        </nav>
      </section>
      <section id="about-me" className="px-8 gap-8" ref={prevElemRef}>
        <div className="grid grid-flow-row gap-8 lg:gap-x-32 place-content-center">
          <h1 className="section-title lg:col-start-2">About Me</h1>

          <p className="text-sm lg:text-lg lg:row-start-2 lg:col-start-2 lg:w-[60ch]">
            I am a self taught artist, designer and developer based in Kerala,
            India. I am a Mathematics post graduate and Computer science
            researcher who has great passion for art and engineer. I like using
            my knowledge in multiple fields for problem solving, implementing
            them for other to use. I like challenging myself and expanding my
            creative limits.
          </p>
          <img
            src="/sreed_avatar.jpg"
            height={64}
            width={64}
            className=" row-start-2 w-48 h-48 lg:w-64 lg:h-64 aspect-square object-cover rounded-full place-self-center lg:row-start-1 lg:row-span-2 lg:col-start-1"
          />
        </div>
        <div className="w-full mb-16 flex flex-col items-center justify-center">
          <h1 className="text-xl lg:text-3xl text-center p-4 ">
            Why work with me?
          </h1>
          <ul className="reasons  flex flex-col lg:flex-row gap-4">
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
          </ul>
        </div>
      </section>
      <section id="portfolio" className="justify-start">
        <header
          ref={pHeaderRef}
          className="w-full sticky top-0 px-8 flex flex-row justify-start lg:justify-center items-center "
        >
          <h1 className="section-title lg:w-[65rem]">Portfolio</h1>
        </header>
        <div className=" w-full lg:w-[1035px] h-fit px-8 flex flex-col gap-4 items-center pt-16">
          <PortfolioItem imgURL="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            aperiam laborum maxime ullam, sed architecto? Dolorem obcaecati
            repellendus qui rerum.
          </PortfolioItem>
        </div>
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
