'use client';
import classNames from 'classnames';
import { useState } from 'react';

export default function Navbar() {
  const [menuNavIsOpen, setMenuNavIsOpen] = useState(false);

  return (
    <nav class='border-gray-200 bg-gray-50 '>
      <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' class='flex items-center'>
          <span class='self-center text-2xl font-semibold whitespace-nowrap'>
            SkillSwap
          </span>
        </a>
        <button
          type='button'
          onClick={() => setMenuNavIsOpen(!menuNavIsOpen)}
          class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
        >
          <span class='sr-only'>Open main menu</span>
          <svg
            class='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          class={classNames('w-full md:block md:w-auto', {
            hidden: !menuNavIsOpen,
          })}
          id='navbar-solid-bg'
        >
          <ul class='flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent '>
            <li>
              <a
                href='/'
                class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                aria-current='page'
              >
                Home
              </a>
            </li>

            <li>
              <a
                href='/login'
                class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
