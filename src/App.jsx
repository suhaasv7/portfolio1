import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import './App.css'

export default function App() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    < >

      {/* Navbar */}
      <nav className='flex justify-between p-4 max-w-7xl mx-auto'>
        <div className='font-bold text-2xl uppercase text-gray-700 tracking-widest items-center'>
          folio<span className='text-orange-500 text-2xl'>.</span>
        </div>
        <div className='flex space-x-4 uppercase tracking-wide items-center'>
          <a className='hover:text-orange-500' href='#'>home</a>
          <a className='hover:text-orange-500' href='#'>about</a>
          <a className='hover:text-orange-500' href='#'>skills</a>
          <a className='hover:text-orange-500' href='#'>blogs</a>
        </div>
        <div className='flex space-x-2 items-center'>
          <a href='#'><img src='/public/icons/instagram.svg' alt='instagram' className='w-8' /></a>
          <a href='https://www.linkedin.com/in/suhaasv7/' target='blank'><img src='/public/icons/linkedin.svg' alt='linkedin' className='w-8' /></a>
          <a href='https://github.com/suhaasvijay' target='blank'><img src='/public/icons/github.svg' alt='github' className='w-8' /></a>
        </div>
      </nav>


      {/* Hero */}
      <div className='flex max-w-7xl mx-auto mt-10 justify-between relative hero'>
        <div className='my-auto ml-20'>
          <h1 className='text-4xl font-bold'>Hello</h1>
          <p className='text-[55px] font-bold text-gray-800'>I&apos;m <span className='text-orange-600' ref={el}>Full stack Developer</span></p>
          <p className='w-[500px] text-sm text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, expedita fugit consequatur commodi eaque quisquam, delectus nam voluptatum assumenda veniam, quos magnam quam rem recusandae at fuga voluptatem sit. Doloremque.
          </p>
        </div>
        <img className='w-[45%] absolute right-0 -bottom-20 splash' src='/splash.svg' />
        <img className='w-[20%] absolute -right-40 -top-20 splash' src='/blob.svg' />
        <img className='profile w-[45%] ' src='/profile-bg.png' />
      </div>
    </>
  )
}
