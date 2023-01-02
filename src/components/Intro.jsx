import React from 'react';
import avatar from '../../public/assets/avatar.png';

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-semibold'>
        Xiaobing Feng
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Web & Mobile Developer
      </p>

      {/* adding image starts*/}
      <div className='relative my-3'>
        <img
          src={avatar}
          alt='avatar'
          className='rounded-full w-60 h-60 border-2 border-stone-900 dark:border-white dark:border-stone-400 shadow-xl'
        />
      </div>
      {/* adding image ends*/}

      {/* max-w-xl here keeps the lines of the paragraph always like that, it wont reduce the lines when the page becomes larger */}
      <p className='text-sm max-w-xl mb-6 mt-4 font-semibold leading-6'>
        After pursuing the knowledge that a software engineering diploma had to
        offer, I decided to put my{' '}
        <span className='text-cyan-600'>
          passion and energy on web development
        </span>
        . Implementing a toggle function or retrieving certain data from API can
        be sometimes nerve-racking and nail-biting, but alway exhilarating when
        you made it.
        <br />
        <br />I am a{' '}
        <span className='text-cyan-600'>Full Stack Web Developer</span> building
        my own version of digital world, and my current goal is to become a
        sophisticated version of it which requires a significant learning curve.{' '}
        <span className='text-cyan-600'>
          “Your enthusiasm of learning is tremendous”
        </span>{' '}
        is a quote about my passion for learning made by a previous leader at
        Evenica.
      </p>
    </div>
  );
}

export default Intro;

// {' '}
//         <a
//           href='https://youtube.com'
//           target='_blank'
//           className='text-cyan-600 hover:underline underline-offset-2 decoration-1 decoration-red-600'
//           rel='noreferrer noopener'
//         >
//           name
//         </a>{' '}
