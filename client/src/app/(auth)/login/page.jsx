"use client"

import LoginFormComponent from "@/components/AllFormComponents/LoginFormComponent";

export default function LoginPage (){

    return (
    <section id="loginPage">
        <LoginFormComponent fetchingDataFunction={(e)=>{console.log(e)}} />
    </section>
    )
}