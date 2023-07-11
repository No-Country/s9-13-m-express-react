"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux"

export default function homePage(){

    const currentUser = useSelector(state => state.user);
    const router = useRouter();

    

    useEffect(()=>{
        if(currentUser.status === "not-authenticated" || currentUser.status === "checking"){

            router.push("/login");
        }
    },[])


    return (
        <main>
            {
                currentUser.status === "not-authenticated" || currentUser.status === "checking" ? (
                    "no autenticado"
                ) : (
                    "Home page"
                )
            }
        </main>
    )
}