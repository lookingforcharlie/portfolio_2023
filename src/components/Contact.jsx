import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/f/5fdecbde-ab83-4350-82e8-357237f08740'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <Title>{`<Contact />`}</Title>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='p-2 bg-transparent border-2 rounded-md focus:outline-none dark:border-stone-600'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none dark:border-stone-600'
          />
          <textarea
            name='message'
            placeholder='message'
            rows='8'
            className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none dark:border-stone-600'
          />
          <button
            type='submit'
            className='text-center inline-block px-7 py-2.5 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md active:scale-[.97] active:duration-75 transition-all hover:scale-[1.02]'
          >
            Create Nexus
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
