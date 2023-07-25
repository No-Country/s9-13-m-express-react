import React from 'react';

export default function CardMeet({ children }) {
  return (
    <div className='flex flex-col gap-10 bg-purpleThirty rounded-lg w-[700px] p-10 items-center'>
      <span className='text-xl'>
        {' '}
        Reunion programada: <span>Asesoria aleman</span>
      </span>
      {/* primer div */}
      <div className='flex flex-row gap-10 items-center w-full'>
        <span>con</span>
        <div className='bg-white rounded-lg flex items-center gap-5 p-4'>
          <img src='#' className='bg-black w-6 h-6 rounded-full' />
          <h2>Tomasaa</h2>
        </div>
      </div>
      {/* segundo div */}
      <div className='flex flex-row gap-10 items-center w-full'>
        <span>horario</span>
        <div className='bg-white rounded-lg flex flex-row p-4 gap-5 items-center'>
          <span className='bg-purpleIconsAndInputs text-white p-2 rounded-lg'>
            Lunes
          </span>
          <span>de</span>
          <span className='font-bold bg-purpleThirty p-2 rounded-lg'>
            19:00
          </span>
          <span>a</span>
          <span className='font-bold bg-purpleThirty p-2 rounded-lg'>
            20:00
          </span>{' '}
        </div>
      </div>
      {children}
    </div>
  );
}
