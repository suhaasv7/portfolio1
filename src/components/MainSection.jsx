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

      <div className='flex mt-10 justify-between relative hero'>
        <div className='my-auto ml-20'>
          <h1 className='text-4xl font-bold'>Hello</h1>
          <p className='text-[55px] font-bold text-gray-800'>I&apos;m <span className='text-orange-600' ref={el}>Full stack Developer</span></p>
          <p className='w-[500px] text-sm text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, expedita fugit consequatur commodi eaque quisquam, delectus nam voluptatum assumenda veniam, quos magnam quam rem recusandae at fuga voluptatem sit. Doloremque.
          </p>
        </div>
        <img className='w-[45%] absolute right-0 -bottom-20 splash' src='/splash.svg' />
        <img className='w-[20%] absolute -right-40 -top-10 splash' src='/blob.svg' />
        <img className='profile w-[45%]' src='/profile-bg.png' />
      </div>

    </div>
  )
}
