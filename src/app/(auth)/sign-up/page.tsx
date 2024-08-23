import { FC } from "react";
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';


interface pageProps {
    
}
 
const page: FC<pageProps> = () => {
    return (
        <div className="align-items-center">
        <div className="sign-up-div">
            <div className="go-back-link-div">
                <ChevronLeft className="go-back-icon" />
            </div>
            <div className="sign-up-div-elements">
                {/* asdasdasd */}
            </div>
        </div>
    </div>
    );
}
 
export default page;