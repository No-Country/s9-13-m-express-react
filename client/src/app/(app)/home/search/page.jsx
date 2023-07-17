import React from 'react';
import SideBar from '@/components/HomePage/SideBar';
// import SkillRibbon from '@/components/HomePage/SkillRibbon';
import { userProfile } from '@/components/HomePage/UserProfileData';
import ProfileCard from '@/components/HomePage/ProfileCard';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function SearchPage() {
  return (
    <main className='min-h-screen flex flex-row  bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 w-64 pt-20 shadow-xl'>
        <SideBar show={'filter'} />
      </div>

      <div className='mx-auto flex-grow pt-20 pl-28'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <div className='w-full'>
            <div className='flex flex-row items-center justify-start'>
              <Link href={'/'} className='text-lg mb-6'>
                <FaArrowLeft className='inline-flex mr-1' />
                <span>Atras</span>
              </Link>
            </div>
            <div className='flex flex-col gap-10 items-start justify-center'>
              <ProfileCard profileData={userProfile[0]} isSingle={false} />
              <ProfileCard profileData={userProfile[1]} isSingle={false} />
              <ProfileCard profileData={userProfile[2]} isSingle={false} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
