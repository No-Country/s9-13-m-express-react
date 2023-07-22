import SideBar from '@/components/HomePage/SideBar';
import UserProfileCard from '@/components/UserProfile/UserProfileCard';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function userProfile() {
  return (
    <main className='min-h-screen flex flex-row bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 pt-10 shadow-xl'>
        <SideBar show={'profile'} />
      </div>
      <div className='mx-auto flex-grow pt-10 px-10 md:px-12 lg:px-16'>
        <div className='flex flex-row items-center justify-start mb-4'>
          <Link href={'/home'} className='text-lg mb-6'>
            <FaArrowLeft className='inline-flex mr-1' />
            <span>Atras</span>
          </Link>
        </div>
        <UserProfileCard />
      </div>
    </main>
  );
}
