import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function MainSection() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>

      <div className='relative flex flex-col items-center justify-between px-5 mt-10 hero lg:flex-row'>
        <div className='my-auto lg:ml-20'>
          <h1 className='text-4xl font-bold'>Hello</h1>
          <p className='text-[55px] font-bold text-gray-800'>I&apos;m <span className='text-orange-600' ref={el}>Full stack Developer</span></p>
          <p className='max-w-[500px] text-sm text-justify flex flex-wrap '>
            I'm an experienced full-stack developer with 1.5 years of expertise in ReactJS, Tailwind, MySQL, and more. Proficient in front-end and back-end development, I'm dedicated to continuous improvement, currently expanding my skills in Next.js, AWS, and mobile development. Let's collaborate to elevate your digital projects with expertise and innovation.
          </p>
        </div>
        <div>
          <img className='w-[45%] absolute right-0 -bottom-20 splash hidden lg:block opacity-60 blur-2xl' src='/splash.svg' />
          {/* <img className='w-[20%] absolute -right-40 -top-10 splash hidden lg:block' src='/blob.svg' /> */}
          <div className='container'>
            <img className='profile' src='/profile-bg.png' />
          </div>
        </div>
      </div>

    </div>
  )
}
