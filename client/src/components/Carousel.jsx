import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

export default function Carousel({
  images,
  title,
  containerClasses,
  slideClasses,
  titleClasses,
  imageClasses,
}) {
  const repeatedImages = images?.concat(images);
  const repeatedTitle = title?.concat(title);

  return (
    <div className={classNames('w-[90%] overflow-hidden', containerClasses)}>
      <div
        className={classNames(
          'flex',
          'w-[250rem]',
          'animate-scroll',
          slideClasses
        )}
      >
        {repeatedImages &&
          repeatedImages.map((image, index) => (
            <div
              key={index}
              className='cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out px-2'
            >
              <p
                className={classNames(
                  'bg-customPurple',
                  'text-center',
                  'text-white',
                  titleClasses
                )}
              >
                {repeatedTitle[index]}
              </p>
              <Image
                src={image}
                alt={repeatedTitle[index]}
                className={classNames(
                  'w-full',
                  'h-full',
                  'object-cover',
                  imageClasses
                )}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
