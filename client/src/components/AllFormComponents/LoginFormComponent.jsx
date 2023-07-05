"use client"

import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../TextField';
import Button from '../Button';



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
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name='email'
        id='email'
        label='Correo'
        placeholder='Ingrese su correo'
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

      <Button type='submit'>Iniciar sesión</Button>
    </form>

  )
  
  
}

export default LoginFormComponent;