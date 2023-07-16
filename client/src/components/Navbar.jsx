'use client';
import { React, useState } from 'react';
import Link from 'next/link';
import { FaBell, FaUser, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const currentUser = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Realizando busqueda: ${searchTerm}`);
  };

  return (
    <nav className='bg-purpleSecondary shadow sticky top-0 z-10'>
      <div className='max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto py-4 px-4'>
        <div>
          <Link href={'/'}>
            <span className='text-2xl font-bold text-yellowPrimary hover:font-bold'>
              SKILL SWAP
            </span>
          </Link>
        </div>
        {currentUser.status == 'authenticated' && (
          <div className={'hidden md:flex items-center'}>
            <input
              type='text'
              value={searchTerm}
              onChange={handleInputChange}
              placeholder='¿Que buscas aprender?...'
              className='py-2 px-4 rounded-l-md focus:outline-none text-purpleSecondary pl-10 p-2.5 placeholder-gray-100 w-full'
            />
            <button
              onClick={handleSearch}
              className='bg-white text-black py-2 px-4 rounded-r-md h-10'
            >
              <FaSearch />
            </button>
          </div>
        )}
        {currentUser.status === 'authenticated' ? (
          <>
            <div className='hidden md:flex items-center justify-between space-x-4 '>
              <Link href={'/home'}>
                {' '}
                <FaBell className='text-yellowPrimary' />{' '}
              </Link>
              <Link href={'/home'}>
                <FaUser className='text-yellowPrimary' />
              </Link>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-yellowPrimary inline-flex items-center justify-center p-2 rounded-md text-purpleSecondary hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-yellowPrimary'
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
          </>
        ) : (
          <div className='space-x-7'>
            <Link className='text-white' href={'/login'}>
              Login
            </Link>
            <Link className='text-white' href={'/login'}>
              Registro
            </Link>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className='md:hidden flex flex-col items-center justify-center gap-5'
          id='mobile-menu'
        >
          <div className='w-full flex flex-row justify-center'>
            <input
              type='text'
              value={searchTerm}
              onChange={handleInputChange}
              placeholder='Search...'
              className='py-2 px-4 rounded-l-md focus:outline-none shadow-lg bg-white text-purpleSecondary text-sm focus:ring-yellowPrimary  pl-10 p-2.5 placeholder-purpleSecondary'
            />
            <button
              onClick={handleSearch}
              className='bg-white text-black py-2 px-4 rounded-r-md h-10'
            >
              <FaSearch />
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
