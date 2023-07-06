'use client';

import RegisterFormComponent from '@/components/AllFormComponents/RegisterFormComponent';

export default function RegisterPage() {
  
  return(
    <section>
      <h2>Registrarse</h2>
      <RegisterFormComponent fetchingDataFunction={(e)=>{console.log(e)}}/>
    </section>
  )
}

