import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProfileCard({ profileData, isSingle }) {
  if (isSingle) {
    return (
      <div className='bg-purpleThirty w-fit rounded-xl'>
        <div
          className='flex flex-row px-8 py-8 items-start justify-center gap-10
      '
        >
          <div className='flex-shrink-0 '>
            <Image
              src={profileData.member?.avatar.secure_url}
              alt='fotoPerfil'
              width={80}
              height={80}
              className='rounded-full'
            />
          </div>
          <div className='flex-grow'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl font-bold'>
                {profileData.name} | {profileData.lastName}
              </h2>
              <div className='flex flex-row gap-4'>
                <h5 className='text-lg'>
                  Area de conocimiento :{' '}
                  <span className='bg-purpleSecondary px-4 py-1 text-white rounded-3xl text-sm font-light'>
                    {profileData.member?.preferences[0].description || ''}
                  </span>{' '}
                </h5>
                <h5 className='text-lg'>
                  Nivel :{' '}
                  <span className='bg-purpleSecondary px-4 py-1 text-white rounded-3xl text-sm font-light'>
                    {profileData.role[0]}{' '}
                  </span>
                </h5>
              </div>
              <div className='flex flex-row gap-10 items-center justify-between'>
                <h5 className='text-lg'>Valoraciones: ⭐⭐⭐⭐⭐</h5>
                <Link href='#'>
                  <button className='bg-yellowPrimary px-4 py-2 mx-auto text-purplePrimary rounded-3xl w-full'>
                    Ver perfil
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-purpleThirty w-fit rounded-xl'>
      <div className='flex flex-row px-8 py-6 items-start justify-center gap-10'>
        <div className='flex-shrink-0 w-fit'>
          <Image
            src={profileData.member?.avatar.secure_url}
            alt='fotoPerfil'
            width={80}
            height={60}
            className='rounded-full object-fill'
          />
        </div>
        <div className='flex-grow'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>
              {profileData.username} | {profileData.email}
            </h2>
            <div className='flex flex-row gap-4'>
              <h5 className='text-lg'>
                Area de conocimiento :{' '}
                <span className='bg-purpleSecondary px-4 py-1 text-white rounded-3xl text-sm font-light'>
                  {profileData.member?.preferences[0].description || ''}
                </span>{' '}
              </h5>
              <h5 className='text-lg'>
                Nivel :{' '}
                <span className='bg-purpleSecondary px-4 py-1 text-white rounded-3xl text-sm font-light'>
                  {profileData.role[0]}{' '}
                </span>
              </h5>
            </div>
            <div className='flex flex-row gap-10 items-center justify-between'>
              <h5 className='text-lg'>Valoraciones: ⭐⭐⭐⭐⭐</h5>
              <Link href='#'>
                <button className='bg-yellowPrimary px-4 py-2 mx-auto text-purplePrimary rounded-3xl w-full'>
                  Ver perfil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
