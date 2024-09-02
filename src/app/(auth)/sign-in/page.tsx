"use client"

import { FC } from "react";
import '../../../styles/signInSignUp.css'
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';
import SignIn from "@/components/SignIn";
import { useRouter } from "next/navigation"


interface pageProps {
    
}
 
const page: FC<pageProps> = () => {

    const router = useRouter()

    const handleGoBack = () => {
        router.push('/');
      };


    return (
        <div className="align-items-center">
            <div className="sign-in-div">
                <div onClick={handleGoBack} className="go-back-link-div">
                    <ChevronLeft  className="go-back-icon" />
                </div>
                <SignIn />
            </div>
        </div>
    );
}
 
export default page;