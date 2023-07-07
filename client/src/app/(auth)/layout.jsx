'use client';
import { usePathname } from 'next/navigation';

export default function layoutAuth({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = usePathname();
  let sectionText;
  let imageUrl = router == '/login' ? '/auth/man.png' : '/auth/woman.png';

  switch (router) {
    case '/login':
      sectionText = '¡Conectate para comenzar a aprender y compartir!';
      break;
    default:
      sectionText = '¡Registrate y comienza a intercambiar conocimiento!';
      break;
  }

  return (
    <div className='h-screen flex justify-center items-center bg-purpleSecondary p-2'>
      <div className='rounded-tl-3xl rounded-bl-3xl  rounded-tr-3xl md:rounded-tr-none rounded-br-3xl md:rounded-br-none bg-purpleThirty w-auto  md:w-1/3 h-4/5 p-3'>
        {children}
      </div>
      <div className='relative  w-1/3 h-4/5 hidden md:block'>
        <h2 className='z-10 bottom-0 left-5 absolute text-3xl font-bold mb-6 text-white'>
          {sectionText}
        </h2>
        <div class='bg-gradient-to-t from-purpleSecondary to-yellowButtonDisable  rounded-tr-3xl rounded-br-3xl w-full h-full'>
          <div
            className='w-full flex items-end h-full rounded-tr-3xl rounded-br-3xl mix-blend-overlay'
          >
            <img src={imageUrl} className='w-full h-full object-cover rounded-tr-3xl rounded-br-3xl' />
          </div>
        </div>
      </div>
    </div>
  );
}
