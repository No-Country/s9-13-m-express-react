'use client';

// import SkillCard from '@/components/Skills/SkillCard';
import Link from 'next/link';
import { FaGlasses, FaUser, FaChalkboardTeacher } from 'react-icons/fa';

// import { useSelector } from 'react-redux';

export default function HomePage() {
  // const currentUser = useSelector((state) => state.user);

  return (
    <main className='min-h-screen flex flex-row  bg-white font-semibold'>
      <div className='bg-purpleThirty mx-auto flex-shrink-0 w-64 pt-40'>
        <div className='flex flex-col items-start justify-center ml-4'>
          <div className='flex flex-row justify-start mb-6'>
            <Link href={'/#'}>
              <div className='flex items-center justify-start gap-4'>
                <FaUser />
                <p className='text-sm'>Mi perfil</p>
              </div>
            </Link>
          </div>
          <div className='flex flex-row justify-center mb-6'>
            <Link href={'/#'}>
              <div className='flex items-center gap-4'>
                <FaGlasses />
                <p className='text-sm'>Solicitudes de aprendizaje</p>
              </div>
            </Link>
          </div>
          <div className='flex flex-row justify-center mb-6'>
            <Link href={'/#'}>
              <div className='flex items-center gap-4'>
                <FaChalkboardTeacher />
                <p className='text-sm'>Solicitudes de enseñanza</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto flex-grow pt-40 pl-40'>
        <div className='flex flex-col items-start justify-center gap-16'>
          <div className='w-full'>
            <h3 className='text-lg mb-6'>Ya que buscas aprender te sugerimos a:</h3>
            <div className='bg-purpleThirty rounded-xl py-4 px-6 flex flex-row gap-20 items-center justify-center w-fit'>
              <h3>nombre</h3>
              <h3>nombre</h3>
              <h3>nombre</h3>
            </div>
          </div>
          <div className='w-full mt-20'>
            <h3 className='text-lg mb-6'>Explora por area: </h3>
            <div className='flex flex-row gap-8 flex-wrap'>
              <button className='bg-purpleSecondary text-white h-14  rounded-md px-14
              w-48' type="button">Idiomas</button>
              <button className='bg-purpleSecondary text-white h-14  rounded-md px-14
              w-48' type="button">Tecnologia</button>
              <button className='bg-purpleSecondary text-white h-14  rounded-md px-14
              w-48' type="button">Artes</button>
              <button className='bg-purpleSecondary text-white h-14  rounded-md px-14
              w-48' type="button">Cocina</button>
              <button className='bg-purpleSecondary text-white h-14  rounded-md px-14
              w-48' type="button">Yoga</button>
              <button className='bg-purpleSecondary text-white h-14  rounded-md px-14
              w-48' type="button">Ver todas</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <h1>Hello! {currentUser.user.email}</h1> */
}
