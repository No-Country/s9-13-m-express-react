"use client"

import LoginFormComponent from "@/components/AllFormComponents/LoginFormComponent";

export default function LoginPage (){

    return (
    <section id="loginPage">
        <h2>Iniciar Sesión</h2>
        <LoginFormComponent fetchingDataFunction={(e)=>{console.log(e)}} />
    </section>
    )
}