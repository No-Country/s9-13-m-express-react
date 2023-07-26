'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import EditModal from './EditModal';
import Link from 'next/link';

const daysOfWeek = {
  lunes: "monday",
  martes: "tuesday",
  miercoles: "wednesday",
  jueves: "thursday",
  viernes: "friday",
  sabado: "saturday",
  domingo: "sunday",
}

function UserProfileCard({ user }) {
  const [openModal, setOpenModal] = useState(false);
  const [schedule, setSchedule] = useState({
    day_of_week: "",
    selected_day: ""
  });
  const currentUser = useSelector((state)=>state.user);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const handleSelectDaysChange = (e) => {
    document.getElementById("selected_day").innerHTML = e.target.value
    console.log(e.target.value)
    schedule.day_of_week = daysOfWeek[e.target.value.toLowerCase()]
    schedule.selected_day = e.target.value
    setSchedule(schedule)
    console.log({schedule})
  };

  const handleMeeting = () => {
  const date = new Date()
  const userId = document.getElementById("userId").value 
  const userName = document.getElementById("userNmae").value
  const newMeeting ={
    message: "Prueba de implementación de API REST 2",
    title: "Reunión de revisión de código 2",
    status: "pending",
    instructor_id: currentUser.user.id,
    meeting_date: "2023-07-31T15:00:00Z",
    start_meeting: "2023-07-31T15:00:00Z",
    end_meeting: "2023-07-31T16:00:00Z",
    duration_meeting: "1 hora",
  
  }
  
    console.log(newMeeting)
    fetch("http://localhost:3001/api/v1/meetings",{
      method: "POST",
      headers: {
        Authorization: "BEARER " + currentUser.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMeeting)
    })
    .then(data=>data.json())
    .then(result=>{
      console.log(result)
    })
    .catch(error=>console.log(error))
  };
    console.log("UserProfileCard");
    console.log({user});
    console.log("CurrentUser: ", currentUser);
  return (
    <div className='bg-white grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 w-auto h-fit max-w-4xl gap-4 overflow-hidden mx-auto'>
      <div className='bg-purpleThirty p-2 sm:p-4 md:p-6 lg:p-8 sm:col-span-3 md:col-span-5 lg:col-span-7 rounded-md'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <img
              src={
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
              }
              alt='#'
              className='w-20 sm:w-24 md:w-32 lg:w-40 rounded-full'
              // className='w-full h-full rounded-full'
            />
          </div>
          <div className='flex flex-col content-between gap-4'>
            <input type="hidden" id="userId" value={user?._id} />
            <input type="hidden" id="userNmae" value={user?.username} />
            <h1 className='text-2xl font-bold'>        
              {/* {user?.member.name || '' + ' ' + user?.member.last_name || ''} */}
            </h1>
            <h4>
              Area de conocimiento:{' '}
              {/* {
              user?.member.skills.map(skill=>(
              <span className='bg-purpleSecondary p-2 rounded-xl text-white text-xs'>
                {skill.name}
              </span>
              ))
              } */}
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
            <div className='flex flex-row items-center gap-1 capitalize'>
              <FaLocationDot className='text-purpleSecondary inline' />
              {/* <span>{user?.member.country}</span> */}
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
              className='w-1/2 h-auto py-1 px-4 rounded-md border-2 border-purpleSecondary mb-10 capitalize'
              onChange={handleSelectDaysChange}
            >
              <option value=''>--</option>
              {
                Object.keys(daysOfWeek).map((day)=>
                  (
                    <option value={day}>{day}</option>
                  ))
              }
            </select>
                <p className='capitalize mt-10' id="selected_day">
                </p>
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
            <button id="exchangeBtn" className='bg-yellowPrimary px-4 py-2 mx-auto text-purplePrimary rounded-3xl w-full'
              onClick={handleMeeting}
            >
                    Hacer intercambio
            </button>
          </div>
        </div>
      </div>
      {openModal && <EditModal modalState={handleModal} />}
    </div>
  );
}

export default UserProfileCard;
