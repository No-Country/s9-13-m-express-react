'use client';
import { React, useState } from 'react';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import EditModal from './EditModal';
import Link from 'next/link';

function UserProfileCard() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };



  return (
    <div className='bg-white grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 w-auto h-fit max-w-4xl gap-4 overflow-hidden mx-auto'>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-3 md:col-span-5 lg:col-span-7 rounded-md'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <Image
              src={'/images/users/user01.png'}
              width={120}
              height={120}
              alt='#'
              className='w-20 sm:w-24 md:w-32 lg:w-40 rounded-full'
              // className='w-full h-full rounded-full'
            />
          </div>
          <div className='flex flex-col content-between gap-4'>
            <h1 className='text-2xl font-bold'>Billy Sommers</h1>
            <h4>
              Area de conocimiento:{' '}
              <span className='bg-purpleSecondary p-2 rounded-xl text-white text-xs'>
                Programacion
              </span>
            </h4>
            <h4>
              Nivel:{' '}
              <span className='bg-purpleSecondary p-2 rounded-xl text-white text-xs'>
                Avanzado
              </span>
            </h4>
          </div>
          <div className='flex flex-col gap-16'>
            <div className='flex justify-end'>
              <Link href={'#'} className=''>
                <MdEdit
                  className='text-purpleSecondary'
                  onClick={handleModal}
                />
              </Link>
            </div>
            <div className='flex flex-row items-center gap-1'>
              <FaLocationDot className='text-purpleSecondary inline' />
              <span>California, USA</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-2 md:col-span-3 lg:col-span-5 rounded-md '>
        <div className='flex flex-col gap-24'>
          <div>
            <h4>Sobre mi experiencia:</h4>
            <p>Aun sin descripcion.</p>
          </div>
          <div>
            <h4>Valoraciones:</h4>
            <p>Aun sin valoraciones.</p>
          </div>
        </div>
      </div>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-1 md:col-span-2 lg:col-span-2 rounded-md'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row items-center justify-center gap-4 px-4'>
            <h2 className='text-xl'>Disponibilidad</h2>
            <Link href={'#'}>
              <MdEdit onClick={handleModal} className='text-purpleSecondary' />
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <p>Dias: </p>
            <select
              id='nivel'
              value='nivel'
              className='w-1/2 h-auto py-1 px-4 rounded-md border-2 border-purpleSecondary mb-10'
              // onChange={handleNivelChange}
            >
              <option value=''>--</option>
              <option value='lunes'>Lunes</option>
              <option value='martes'>Martes</option>
              <option value='miercoles'>Miercoles</option>
              <option value='jueves'>Jueves</option>
              <option value='viernes'>Viernes</option>
              <option value='sabado'>Sabado</option>
            </select>

            <p>Horario: </p>
            <select
              id='valoracion'
              value='valoracion'
              className='w-1/2 h-auto py-1 px-4 rounded-md border-2 border-purpleSecondary mb-24'
              // onChange={handleValoracionChange}
            >
              <option value=''>--</option>
              <option value='mañana'>Mañana</option>
              <option value='tarde'>Tarde</option>
              <option value='noche'>Noche</option>
            </select>
          </div>
        </div>
      </div>
      {openModal && <EditModal modalState={handleModal} />}
    </div>
  );
}

export default UserProfileCard;
