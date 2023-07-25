import CardMeet from '@/components/Meet/CardMeet';
import Link from 'next/link';

export default function Meeting() {
  return (
    <div className='flex items-center flex-col w-screen my-10'>
      <CardMeet>
        <Link
          href='/rooms/new'
          className='bg-yellow-400 w-8/12 py-2 px-8 rounded-full text-xl text-center hover:bg-purpleIconsAndInputs text-white'
        >
          Unirse a la llamada
        </Link>
      </CardMeet>
    </div>
  );
}
