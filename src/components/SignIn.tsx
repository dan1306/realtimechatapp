import { FC } from "react";
import '../styles/signInSignUp.css'
import { MessagesSquare } from 'lucide-react';
import UserAuthForm from "./UserAuthForm";


interface SignInProps {
    
}
 
const SignIn: FC<SignInProps> = () => {
    return (
        <div className="sign-in-div-elements">
            <div className="app-logo-on-sign-in-out-component">
                <MessagesSquare className="app-logo" />
            </div>
            <div className="welcome-back-div">
                Welcome Back
            </div>
            <div className="user-aggrement-div">
                <p  className="user-aggrement-text">
                    By continuing, you are setting up a Breadit
                    account and agree to our User Agreement and Privacy Policy.
                </p>
            </div>
            <div className="user-auth-form-div">
                <UserAuthForm />
            </div>
            <div className="new-to-app-sign-up">
                New to ChatMeUp? Sign Up
            </div>
        </div> );
}
 
export default SignIn;