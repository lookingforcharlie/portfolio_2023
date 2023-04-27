import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import logo from '../../public/assets/rabbit_bot.png';

function Header() {
  return (
    <div className='container mx-auto'>
      <div className='flex-none px-2 mx-2 pt-5'>
        <div className='inline'>
          <img src={logo} alt='' className='w-12 inline mr-8 rounded-full' />
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
    </div>
  );
}

export default Header;
