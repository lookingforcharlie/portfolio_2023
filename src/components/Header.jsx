import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import logo from '../../public/assets/rabbit_bot_min.png';

function Header() {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='px-2 mx-2 pt-5'>
          <div className='inline'>
            <img
              src={logo}
              alt=''
              className='w-12 inline mr-8 rounded-full'
              loading='lazy'
            />
          </div>
          <a
            href='https://github.com/lookingforcharlie'
            target='_blank'
            rel='noopener noreferrer'
            alt='github'
            aria-label='github'
            className='px-1' // put space between these icons
          >
            <FiGithub className='inline pr-2 text-3xl active:scale-[.97] active:duration-75 transition-all hover:scale-[1.13]' />
          </a>
          <a
            href='https://twitter.com/CharlieFeng2020'
            target='_blank'
            rel='noopener noreferrer'
            alt='twitter'
            aria-label='twitter'
            className='px-1' // put space between these icons
          >
            <FiTwitter className='inline pr-2 text-3xl active:scale-[.97] active:duration-75 transition-all hover:scale-[1.13]' />
          </a>
          <a
            href='https://www.linkedin.com/in/xiaobingfeng/'
            target='_blank'
            rel='noopener noreferrer'
            alt='linkedin'
            aria-label='linkedin'
            className='px-1' // put space between these icons
          >
            <FiLinkedin className='inline pr-2 text-3xl active:scale-[.97] active:duration-75 transition-all hover:scale-[1.13]' />
          </a>
        </div>
        <div className='self-center md:px-20 mt-4'>
          <a
            className='border border-yellow-600 px-4 py-2 rounded-lg'
            href='https://drive.google.com/file/d/1mYb9OPXMkeUM6oHN-NEgrlCsHBr8cGU8/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            type='button'
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
