import SideBar from '@/components/HomePage/SideBar';
import UserProfileCard from '@/components/UserProfile/UserProfileCard';
import React from 'react';

export default function userProfile() {
  return (
    <main className='min-h-screen flex flex-row bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 w-64 pt-20 shadow-xl'>
        <SideBar show={'profile'} />
      </div>
      <div className='mx-auto flex-grow pt-20 pl-20 w-full'>
        <UserProfileCard />
      </div>
    </main>
  );
}
