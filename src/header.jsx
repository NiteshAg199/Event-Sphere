import React, { useState } from "react";
import './Header.css';
const Header=()=>{
    const [user,setUser]=useState(null);
    function handleLogIn(){
        console.log("Open Login Form");
    }
    function handleRegister(){
        console.log("Open Register Form")
    }
    return(
        <>
            <div className="outerContainer">
                <div className="leftBox">
                    <nav>
                        <div>Home</div>
                        <div>Events Provider</div>
                        <div>Event Type</div>
                        <div>Carrers</div>
                        <div>Contact Us</div>
                        <div>About</div>
                    </nav>
                </div>
                <div className="rightBox">
                    <button onClick={handleLogIn}>Sign In</button>
                    <button onClick={handleRegister}>Sign Up</button>
                </div>
            </div>
        </>
    );
}
export default Header;