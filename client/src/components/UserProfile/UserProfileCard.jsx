import React from 'react';

function UserProfileCard({ props }) {
  const prop = props;
  console.log(prop);

  return (
    <div className='max-w-3xl bg-purpleThirty'>
      <div className='flex flex-col gap-4'>
        <div className=' flex flex-row'>Head</div>
        <div className=' flex flex-row '>
          <div className=' flex-grow'>body 1</div>
          <div className='flex-shrink-0'>body 2</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
