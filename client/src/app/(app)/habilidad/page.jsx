'use client';

import TextField from '@/components/TextField';

export default function Habilidades() {
  return (
    <div className='h-full'>
      <h1 className='text-4xl text-center mt-5'>
        ¡Nombre, bienvenida a SkillSwap!
      </h1>
      <div className='flex h-[85%] justify-center items-center'>
        <div className='bg-yellowButtonDisable w-full sm:w-1/2 p-5'>
          <h2 className='text-xl'>Seleccionaste: Otros</h2>
          <form className='space-y-5 mt-10'>
            <div className='flex items-center justify-between space-x-5'>
              <label className='text-lg' htmlFor='habilidad'>
                Habilidad
              </label>
              <TextField
                name='habilidad'
                placeholder='habilidad'
                id={'habilidad'}
                customClassNames='w-72'
              />
            </div>
            <div className='flex items-center justify-between space-x-5'>
              <label className='text-lg' htmlFor='descripcion'>
                Descripción
              </label>
              <TextField
                name='descripcion'
                placeholder='descripcion'
                id={'descripcion'}
                customClassNames='w-72'
              />
            </div>
            <div className='flex items-center justify-between space-x-5'>
              <label className='text-lg' htmlFor='nivel'>
                Nivel
              </label>
              <select className='px-5 py-3.5 bg-white' name='nivel' id='nivel'>
                <option value='principiante'>Principiante</option>
                <option value='intermedio'>Intermedio</option>
                <option value='avanzado'>Avanzado</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
