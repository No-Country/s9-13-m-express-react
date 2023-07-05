"use client"


import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  userName: Yup.string().required('User name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});


const RegisterFormComponent = ({fetchingDataFunction}) => {

    const formik = useFormik({
        initialValues: {
          userName: '',
          email: '',
          password:"",
          confirmPassword:"",
        },
        validationSchema: validationSchema,
        onSubmit: (values, {resetForm}) => {
          // Lógica para enviar el formulario
          fetchingDataFunction()
          resetForm()
          console.log(values);
        },
    });

    return (
    <form onSubmit={formik.handleSubmit}>

          <div>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'

            />
            {formik.touched.userName && formik.errors.userName && (
                <div>{formik.errors.userName}</div>
            )}
          </div>

            <div>
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'

            />
            {formik.touched.email && formik.errors.email && (
                <div>{formik.errors.email}</div>
            )}
            </div>

            


            <div>
            <label htmlFor="password">contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'

            />
            {formik.touched.password && formik.errors.password && (
                <div>{formik.errors.password}</div>
            )}
            </div>

            <div>
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'

            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div>{formik.errors.confirmPassword}</div>
            )}
            </div>
        
        <button type="submit">Submit</button>
    </form>
    );
}

export default RegisterFormComponent