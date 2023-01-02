import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <div className='py-5 text-center'>
      <div className='flex-none px-3 mx-3 mt-3'>
        <a
          href='https://github.com/lookingforcharlie'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='github'
          className='px-1 ' // put space between these icons
        >
          <FiGithub className='inline pr-2 text-3xl active:scale-[.97] active:duration-75 transition-all hover:scale-[1.14]' />
        </a>
        <a
          href='https://twitter.com/CharlieFeng2020'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='twitter'
          className='px-1'
        >
          <FiTwitter className='inline pr-2 text-3xl active:scale-[.97] active:duration-75 transition-all hover:scale-[1.14]' />
        </a>
        <a
          href='https://www.linkedin.com/in/xiaobingfeng/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='linkedin'
          className='px-1'
        >
          <FiLinkedin className='inline pr-2 text-3xl active:scale-[.97] active:duration-75 transition-all hover:scale-[1.14]' />
        </a>
      </div>
      <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Xiaobing Feng. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
