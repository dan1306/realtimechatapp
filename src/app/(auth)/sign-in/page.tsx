import { FC } from "react";
import '../../../styles/signInSignUp.css'
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';
import SignIn from "@/components/SignIn";


interface pageProps {
    
}
 
const page: FC<pageProps> = () => {
    return (
        <div className="align-items-center">
            <div className="sign-in-div">
                <div className="go-back-link-div">
                    <ChevronLeft className="go-back-icon" />
                </div>
                <SignIn />
            </div>
        </div>
    );
}
 
export default page;