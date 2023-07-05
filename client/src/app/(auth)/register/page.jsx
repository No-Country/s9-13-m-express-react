"use client"

import RegisterFormComponent from "@/components/AllFormComponents/RegisterFormComponent";

export default function RegisterPage (){

    return (
    <section id="loginPage">
        <h2>Registro de usuario</h2>
        <RegisterFormComponent fetchingDataFunction={(e)=>console.log(e)}/>
    </section>
    )
}