"use client"

import { useState } from "react";
import "../styles/navbar.css"
import { MessagesSquare } from 'lucide-react';

 
const NavBar = () => {

    const [dropUserOption, SetdropUserOption] = useState<boolean>(false)

    return (
        <div className="navbar-basic-styling">
            <div className="navbar-elements">
                <div className="nav-logo">
                    <MessagesSquare className="nav-messages-square" />
                    <p className="nav-titile">
                        ChatMeUp
                    </p>
                </div>
                {/* <div>
                    adas
                </div> */}
                <div className="nav-user-dropdown-and-settings">
                    <div className="nav-user-avatar" onClick={()=> SetdropUserOption(!dropUserOption)}>

                    </div>
                    <div className={`nav-user-dropdown ${dropUserOption ? '' : 'hide-user-dropdown'}`}>
                    <div className="nav-user-name-and-email">
                            <p className="username">
                                username
                            </p>
                            <p className="email">
                                email
                            </p>
                        </div>
                        <hr className="line" />
                        <div>
                            <p className="nav-feed">
                                Feed
                            </p>
                            <p className="nav-create-a-chat">
                                Create A Chat
                            </p>
                            <p className="nav-settings">
                                Settings
                            </p>
                        </div>
                        <hr className="line" />
                        <div className="signIn-signOut">
                            SignIn / Sign Out
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;