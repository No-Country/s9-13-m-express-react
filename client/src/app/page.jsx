import React from 'react';
import { koulen, gothicSc, gothic } from './styles/fonts';
import Image from 'next/image';
import img from '../../public/images/landing.png';
import Carousel from '@/components/Carousel';
import gardening from '../../public/images/gardening.png';
import kitchen from '../../public/images/kitchen.png';
import languages from '../../public/images/languages.png';
import music from '../../public/images/music.png';
import arts from '../../public/images/plastic-arts.png';
import technology from '../../public/images/technology.png';
import weave from '../../public/images/weave.png';
import yoga from '../../public/images/yoga.png';
import Button from '@/components/Button';

export default function LandingPage() {
  const carouselLanding = [
    languages,
    technology,
    kitchen,
    yoga,
    music,
    arts,
    gardening,
    weave,
  ];
  const title = [
    'IDIOMAS',
    'TECNOLOGIA',
    'COCINA',
    'YOGA',
    'MÚSICA',
    'ARTES PLASTICAS',
    'JARDINERIA',
    'Y MÁS...',
  ];

  return (
    <>
      <main className='min-h-screen bg-customPurple flex flex-col justify-around'>
        <div className='-z-50 absolute w-full h-screen'>
          <Image src={img} alt='landing' layout='fill' objectFit='cover' />
        </div>
        <div className='bg-yellowTitle ml-8 px-4 py-4 w-52 text-center'>
          LOGO
        </div>
        <div className='flex flex-col pl-8'>
          <h1 className={`${koulen.className} text-yellowTitle text-9xl`}>
            SKILL SWAP
          </h1>
          <p
            className={`${gothicSc.className} leading-10 font-normal text-white text-4xl pt-4`}
          >
            CONECTANDO HABILIDADES, <br /> IMPULSANDO EL APRENDIZAJE <br />{' '}
            COLABORATIVO.
          </p>
        </div>
        <p
          className={`${gothic.className} self-end text-right leading-10 font-normal text-white text-4xl pr-8 pt-4`}
        >
          Esta plataforma te permite conectar con personas <br /> que poseen
          distintas habilidades, aprender de ellas, <br /> e intercambiar tus
          conocimientos, fomentando <br /> así el beneficio mutuo.
        </p>
      </main>
      <section className='flex flex-col justify-around space-y-6 bg-purpleThirty h-full'>
        <br />
        <h3
          className={`${koulen.className} text-purplePrimary text-center text-4xl p-4`}
        >
          ¡Intercambia conocimientos!
        </h3>
        <div className='flex justify-center'>
          <Carousel images={carouselLanding} title={title} />
        </div>

        <div className='self-end mr-[5%] p-4'>
          <Button
            customClassNames={
              'text-purplePrimary bg-yellowPrimary rounded-full font-semibold'
            }
          >
            Comenzar
          </Button>
        </div>
      </section>
    </>
  );
}
