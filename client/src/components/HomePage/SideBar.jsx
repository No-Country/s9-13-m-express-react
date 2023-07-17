'use client';
import Link from 'next/link';
import { React, useState } from 'react';
import { FaChalkboardTeacher, FaGlasses, FaUser } from 'react-icons/fa';

export default function SideBar({ show }) {
  const [nivel, setNivel] = useState('');
  const [valoracion, setValoracion] = useState('');

  const handleNivelChange = (e) => {
    setNivel(e.target.value);
    console.log(nivel);
  };

  const handleValoracionChange = (e) => {
    setValoracion(e.target.value);
    console.log(valoracion);
  };

  if (show === 'home') {
    return (
      // Se renderiza Sidebar principal
      <div className='flex flex-col items-start justify-center ml-4'>
        <Link href='/#' className='flex items-center justify-start gap-4 mb-6'>
          <FaUser />
          <p className='text-sm'>Mi perfil</p>
        </Link>
        <Link href='/#' className='flex items-center gap-4 mb-6'>
          <FaGlasses />
          <p className='text-sm'>Solicitudes de aprendizaje</p>
        </Link>
        <Link href='/#' className='flex items-center gap-4'>
          <FaChalkboardTeacher />
          <p className='text-sm'>Solicitudes de enseñanza</p>
        </Link>
      </div>
    );
  }

  return (
    // Se renderiza Sidebar para filtrar
    <div className='flex flex-col items-start justify-center ml-4 gap-4'>
      <h2 className='mb-10 text-lg font-bold'>Resultados de busqueda </h2>
      <div>
        <h2 className='font-bold text-lg'>Area</h2>
        <h5 className='mx-auto font-normal'>English</h5>
      </div>
      <div>
        <h2 className='font-bold text-lg'>Filtrar por</h2>
        <div className='flex flex-col gap-6 items-center mt-4'>
          <select
            id='nivel'
            value='nivel'
            className='w-52 h-12 py-2 px-4 rounded-sm'
            onChange={handleNivelChange}
          >
            <option value=''>Nivel</option>
            <option value='principiante'>Principiante</option>
            <option value='medio'>Medio</option>
            <option value='experimentado'>Experimentado</option>
          </select>

          <select
            id='valoracion'
            value='valoracion'
            className='w-52 h-12 py-2 px-4 rounded-sm'
            onChange={handleValoracionChange}
          >
            <option value=''>Valoracion</option>
            <option value='alta'>Valoración más alta</option>
            <option value='baja'>Valoración más baja</option>
          </select>
        </div>
        <button
          className='underline opacity-50 hover:opacity-100 mt-10'
          onClick={() => console.log('limpiando...')}
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
