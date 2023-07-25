import CardMeet from '@/components/Meet/cardMeet';
import Link from 'next/link';

export default function Meeting() {
  return (
    <div className='App flex items-center justify-center w-screen h-screen'>
      <CardMeet>
        <Link
          href='/rooms/new'
          className='bg-yellow-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white'
        >
          Unirse a la llamada
        </Link>
      </CardMeet>
    </div>
  );
}
