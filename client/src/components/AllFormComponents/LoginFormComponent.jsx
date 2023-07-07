"use client"

import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../TextField';
import Button from '../Button';
import Link from 'next/link';



const LoginFormComponent = ({fetchingDataFunction}) => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Formato de correo electrónico inválido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      // Lógica para enviar el formulario
      console.log(values);
      fetchingDataFunction()
      resetForm()
      
    },
  });
  

  return(
    <div className='mx-11 2xl:mt-12'>
      <h1 className='text-center text-4xl font-semibold 2xl:mb-12 mt-[3rem] mb-[3rem]'>
        Iniciar Sesión.
      </h1>
      <form className='space-y-5 2xl:space-y-7' onSubmit={formik.handleSubmit}>
        <TextField
          name='email'
          id='email'
          label='Correo Electronico'
          placeholder='ejemplo@ejemplo.com'
          onChange={(value) => formik.setFieldValue('email', value)}
          value={formik.values.email}
          error={formik.errors.email}
        />

        

        <TextField
          name='password'
          id='password'
          type='password'
          label='Contraseña'
          placeholder='* * * * * * * *'
          onChange={(value) => formik.setFieldValue('password', value)}
          value={formik.values.password}
          error={formik.errors.password}
        />

        

        <Button customClassNames={"w-full bg-yellowPrimary text-purplePrimary rounded-full text-bold"} type='submit'>Iniciar Sesión.</Button>
        <div>
          <p className='my-2'>
            ¿Olvidaste tu contraseña?{' '}
          </p>
          <p className='my-2'>
            <span>
              Aun no tienes Cuenta?
            </span>
            <Link className='text-purple-950  text-xs  underline mx-2' href='/register'>
              ¡Registrate!
            </Link>
          </p>

        </div>
      </form>
    </div>

  )
  
  
}

export default LoginFormComponent;