'use client';
import { React, useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-purpleSecondary shadow sticky top-0'>
      <div className='max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto px-2 sm:px-4 xl:px-6 py-2'>
        <div>
          <Link href={'/'}>
            <span className='text-2xl font-bold text-yellowPrimary hover:font-bold'>
              SKILL SWAP
            </span>
          </Link>
        </div>
        <div className='hidden md:flex'>
          <input
            className='rounded-md shadow-lg bg-gray-100 border border-gray-300 text-purpleSecondary text-sm focus:ring-yellowPrimary block w-full pl-10 p-2.5 placeholder-purpleSecondary'
            type='search'
            name='search'
            id='search'
            placeholder=' Searching...'
          />
        </div>
        <div className='hidden md:flex items-center justify-between space-x-4 '>
          <Link href={'/login'}>
            {' '}
            <FaBell className='text-yellowPrimary' />{' '}
          </Link>
          <Link href={'/login'}>
            <FaUser className='text-yellowPrimary' />
          </Link>
        </div>
        <div className='-mr-2 flex md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='bg-purplePrimary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purpleSecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            aria-controls='mobile-menu'
            aria-expanded={isOpen}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
            <svg
              className={`block h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className='md:hidden flex flex-col items-center justify-center gap-5'
          id='mobile-menu'
        >
          <div className='w-full flex flex-row justify-center'>
            <input
              className='rounded-md shadow-lg bg-gray-100 border border-gray-300 text-purpleSecondary text-sm focus:ring-yellowPrimary  pl-10 p-2.5 placeholder-purpleSecondary'
              type='search'
              name='search'
              id='search'
              placeholder=' Searching...'
            />
            <button
              type='submit'
              className='inline-flex shadow-lg items-center py-2.5 px-3 ml-1 text-sm font-normal text-yellowPrimary bg-purpleSecondary  hover:bg-purplePrimary hover:font-bold focus:ring-2 focus:outline-none focus:ring-yellowPrimary rounded'
            >
              <svg
                aria-hidden='true'
                class='mr-2 -ml-1 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
              Search
            </button>
          </div>
          <div className='px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-center gap-2'>
            <Link href={'/login'} className='text-purplePrimary'>
              {' '}
              <FaBell className='text-yellowPrimary' />{' '}
            </Link>
            <Link href={'/login'} className='text-yellowPrimary'>
              <FaUser />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
