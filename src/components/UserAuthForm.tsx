"use client"

import { FC, useEffect, useState } from "react";
import { Icons } from "./Icons";
import '../styles/userAuthForm.css'
import {signIn} from 'next-auth/react'



interface UserAuthFormProps {
    
}
 
const UserAuthForm: FC<UserAuthFormProps> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

        useEffect(() => {
                // console.log(isLoading)

                if (isLoading == true) {
                    loginWithGoogle_2()
                }
        }, [isLoading])  // pass `value` as a dependency

    const loginWithGoogle_2 = async () => {
        try {
            // throw new Error()
            await signIn('google')
        } catch (error) {
            // toast notification
            // toast({
            //     title: "There was a problem.",
            //     description: "There was an error logging in with google.",
            //     variant: "destructive"
            // })

        } finally {
            setIsLoading(false)
            console.log(isLoading)

        }
    }

    const loginWithGoogle_1 = () => {
        setIsLoading(true) 
        // console.log(isLoading)
    }


    return (
        <div className="sign-in-up-button" onClick={()=> loginWithGoogle_1()}>
            {isLoading ?
                <span className="loader"></span> :
                <>
                    <Icons.google className="google-icon h-4 w-4 mr-2" /> Google
                </>
            }
        </div>
    );
}
 
export default UserAuthForm;