'use client';

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  onChecking,
  onLogin,
  onLoginError,
  onLogout,
} from '@/store/slices/authSlice';
import loginUser from '@/services/auth/login.service';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Oval } from 'react-loader-spinner';

export default function LoginFormComponent() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Formato de correo electrónico inválido')
      .required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Lógica para enviar el formulario
      dispatch(onChecking());

      try {
        let response = await loginUser(values);
        if (!response.ok) throw new Error('Login failed');
      } catch (error) {
        toast.error('Login failed', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        dispatch(onLoginError(error));
        resetForm();
      }

      toast.success(`Login Succesfully`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.log(response);
      dispatch(onLogin(response));
      resetForm();
      router.push('/home');
    },
  });

  useEffect(() => {
    if (currentUser.status === 'checking') {
      dispatch(onLogout());
    }
  }, []);

  return (
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

        {currentUser.status === 'checking' ? (
          <button
            disabled
            className='w-full bg-yellowPrimary text-purplePrimary rounded-full text-bold px-3 py-2 flex justify-center items-center'
          >
            <Oval
              height={20}
              width={20}
              color='blue'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor=''
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </button>
        ) : (
          <Button
            customClassNames={
              'w-full bg-yellowPrimary text-purplePrimary rounded-full text-bold'
            }
            type='submit'
          >
            Iniciar Sesión.
          </Button>
        )}

        <div>
          <p className='my-2'>¿Olvidaste tu contraseña? </p>
          <p className='my-2'>
            <span>Aun no tienes Cuenta?</span>
            <Link
              className='text-purple-950  text-xs  underline mx-2'
              href='/register'
            >
              ¡Registrate!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
