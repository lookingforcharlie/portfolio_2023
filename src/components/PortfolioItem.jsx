import React from 'react';

function PortfolioItem({ title, imgUrl, stack, linkLive }) {
  return (
    <a
      href={linkLive}
      target='_blank'
      rel='noopener noreferrer'
      className='border-2 border-stone-900 dark:border-white dark:border-stone-400 rounded-md overflow-hidden shadow-lg'
    >
      <img
        src={imgUrl}
        alt={title}
        className='w-full h-36 md:h-48 object-cover cursor-pointer'
      />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-1 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map((item) => (
            <span
              className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 
              dark:border-white dark:border-stone-600 rounded-md'
              key={crypto.randomUUID()}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
