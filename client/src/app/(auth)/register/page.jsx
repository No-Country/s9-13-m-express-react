'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@/components/TextField';
import Button from '@/components/Button';

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();

      console.log(values);
    },
  });

  return (
    <form className='space-y-4' onSubmit={formik.handleSubmit}>
      <TextField
        name='username'
        id='username'
        label='Usuario'
        placeholder='Username'
        onChange={(value) => formik.setFieldValue('username', value)}
        value={formik.values.username}
        error={formik.errors.username}
      />

      <TextField
        name='email'
        id='email'
        label='Correo electrónico'
        placeholder='ejemplo@ejemplo.com'
        value={formik.values.email}
        onChange={(value) => formik.setFieldValue('email', value)}
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

      <TextField
        name='confirmPassword'
        id='confirmPassword'
        type='password'
        label='Confirma la contraseña'
        placeholder='* * * * * * * *'
        onChange={(value) => formik.setFieldValue('confirmPassword', value)}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
      />

      <Button type='submit'>Submit</Button>
    </form>
  );
}

const validationSchema = Yup.object({
  username: Yup.string().required('El nombre de usuario es requerido'),
  email: Yup.string().email('Email invalido').required('El email es requerido'),
  password: Yup.string()
    .min(8, 'La contraseña debe de tener 8 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben de coincidir')
    .required('Confirma la contraseña'),
});
