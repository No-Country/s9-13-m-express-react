"use client"


import Button from '@/components/Button';
import { useSelector } from 'react-redux';
import { TbPointFilled } from 'react-icons/tb';
import Link from 'next/link';

const LernSkils = ()=>{

  let skills = ["Idiomas" , "tecnología", "Artes", "Cocina", "Yoga", "Otros"]

    const currentUser = useSelector(state => state.user);
    console.log(currentUser)

    return (
    <div className='h-full'>
      <h1 className='text-4xl text-center mt-5'>
        ¡{currentUser.user.username}, bienvenid@ a SkillSwap
      </h1>
      <p>
        Antes de continuar cuentanos...
      </p>
      <h2>
        ¿Cual es tu area de aprender?
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {
          skills.map((button, key)=>{
            return (
            <div key={key} className='col-span-1'>
              <button className='w-full py-3 rounded bg-white border-purplePrimary border-2 text-purpleSecondary' type='button' onClick={()=>console.log(button)}>
                {button}
              </button>
            </div>
            )
          })
        }
      </div>
        <div className='flex justify-center items-center'>
        <span  className='cursor-pointer'>
            <Link href={"/habilidad/ensenar"} >
                <TbPointFilled/>
            </Link>
        </span>

        <span className='cursor-pointer'>
            <Link href={"/habilidad/aprender"} >
                <TbPointFilled/>
            </Link>
        </span>

        <span  className='cursor-pointer'>
            <Link href={"/habilidad/otros"} >
                <TbPointFilled/>
            </Link>
        </span>
        
        </div>
    </div>
    )
}

export default LernSkils;