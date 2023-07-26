import { useEffect, useState } from 'react';

export default function CardMeet({ children, card, id }) {
  const [username, setUsername] = useState('');
  const date = new Date(card.start_meeting);
  const hour = date.getHours();
  const day = date.getDay();

  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/users/${id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setUsername(data.user[0].username));
  }, []);

  return (
    <div className='flex flex-col gap-10 bg-purpleThirty rounded-lg w-[700px] p-10 items-center'>
      <span className='text-xl'>
        {' '}
        Reunion programada: <span>{card.title}</span>
      </span>
      {/* primer div */}
      <div className='flex flex-row gap-10 items-center w-full'>
        <span>con</span>
        <div className='bg-white rounded-lg flex items-center gap-5 p-4'>
          <img src='#' className='bg-black w-6 h-6 rounded-full' />
          <h2>{username}</h2>
        </div>
      </div>
      {/* segundo div */}
      <div className='flex flex-row gap-10 items-center w-full'>
        <span>horario</span>
        <div className='bg-white rounded-lg flex flex-row p-4 gap-5 items-center'>
          <span className='bg-purpleIconsAndInputs text-white p-2 rounded-lg'>
            {daysOfWeek[day]}
          </span>
          <span>de</span>
          <span className='font-bold bg-purpleThirty p-2 rounded-lg'>
            {hour + ':00'}
          </span>
          <span>a</span>
          <span className='font-bold bg-purpleThirty p-2 rounded-lg'>
            {hour + 1 + ':00'}
          </span>{' '}
        </div>
      </div>
      {children}
    </div>
  );
}