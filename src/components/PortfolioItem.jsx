import React from 'react';

function PortfolioItem({ title, imgUrl, stack, linkLive, linkGit, linkDemo }) {
  return (
    // <!-- Card start:  -->
    <div className='group h-96 w-80 [perspective:1000px]'>
      <div className='relative border border-stone-900 dark:border-stone-400 rounded-md h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        {/* <!-- front wrapper --> */}
        <div className='absolute inset-0'>
          <img
            className='w-full h-2/3 object-cover rounded-t-md  shadow-xl shadow-black/40'
            src={imgUrl}
            alt='image'
            loading='lazy'
          />
          <div className='w-full p-4'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
              {title}
            </h3>
            <p className='flex flex-wrap gap-1 flex-row items-center justify-start text-xs md:text-sm'>
              {stack.map((item) => (
                <span
                  className='inline-block px-2 py-1 font-semibold border-2 border-stone-900
              dark:border-stone-600 rounded-md'
                  key={crypto.randomUUID()}
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* <!-- back wrapper --> */}
        <div className='absolute inset-0 h-full w-full rounded-md bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <div className='flex min-h-full flex-col items-center justify-center space-y-4'>
            <h1 className='text-3xl font-bold mb-6'>{title}</h1>

            {linkDemo === '#' ? null : (
              <a
                href={linkDemo}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 relative overflow-hidden py-1 after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-orange-700 after:absolute hover:after:right-0 after:duration-200'
              >
                Demo On YouTube
              </a>
            )}

            <a
              href={linkLive}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 relative overflow-hidden py-1 after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-orange-700 after:absolute hover:after:right-0 after:duration-200'
            >
              Visit the Website
            </a>
            <a
              href={linkGit}
              target='_blank'
              rel='noopener noreferrer'
              // disable a tag for Mobile Math Game app, cos it doesn't have github
              className={`mt-2 relative overflow-hidden py-1 after:h-[2px] after:w-full after:bottom-0 after:right-full after:bg-orange-700 after:absolute hover:after:right-0 after:duration-200 ${
                linkGit === '#' && 'pointer-events-none'
              } `}
            >
              View On GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    // <a
    //   href={linkLive}
    //   target='_blank'
    //   rel='noopener noreferrer'
    //   className='border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden shadow-lg'
    // >
    //   <img
    //     src={imgUrl}
    //     alt={title}
    //     className='w-full h-36 md:h-48 object-cover cursor-pointer'
    //   />
    //   <div className='w-full p-4'>
    //     <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
    //       {title}
    //     </h3>
    //     <p className='flex flex-wrap gap-1 flex-row items-center justify-start text-xs md:text-sm'>
    //       {stack.map((item) => (
    //         <span
    //           className='inline-block px-2 py-1 font-semibold border-2 border-stone-900
    //           dark:border-white dark:border-stone-600 rounded-md'
    //           key={crypto.randomUUID()}
    //         >
    //           {item}
    //         </span>
    //       ))}
    //     </p>
    //   </div>
    // </a>
  );
}

export default PortfolioItem;

{
  /* <a
href={linkLive}
target='_blank'
rel='noopener noreferrer'
className='border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden shadow-lg'
> */
}
