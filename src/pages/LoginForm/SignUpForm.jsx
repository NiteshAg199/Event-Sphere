import React from "react";
import './SignUpForm.css';
import { useState } from "react";
import { useRef } from "react";
const SignUpForm=()=>{
    const[formData,setFormData]=useState({
        "name":"",
        "email":"",
        "password":"",
        "image":"",
        "isEventProvider":"false",
        "YOE":"",
        "Description":""
    });
    function handleSignUpForm(e){
        e.preventDefault();
        console.log(formData)
    }

    const [hiddenCss,setHiddenCss]=useState({});
    // let ref=useRef(document.getElementById("userName"));

    function handleChange(e){
        
        let name=e.target.name;
        let value=e.target.value;
        if(name==="isEventProvider") value=e.target.checked;
        setFormData({
            ...formData,
            [name]:value
        });

        console.log(formData);

        if(name==="isEventProvider" && value===false) setHiddenCss({"display":"none"});
        else if(name==="isEventProvider") setHiddenCss({});
        // console.log(formData);
    }
    return(
        <>
        <div className="signUpFormOuterContainer">
        <div className="signUpFormHeading">SignUpForm</div>
            <div className="signUpFormContainerCss">
                <form>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                            <label htmlFor="userName">Name</label>
                        </div>
                        <div className="loginFormfieldData">
                            <input type="text" id="userName" onChange={handleChange} name="name" value={formData.name} autoComplete="off"/>
                        </div>
                    </div>
                    <br/>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                            <label htmlFor="userEmail">Email</label>
                        </div>
                        <div className="loginFormfieldData">
                            <input type="email" id="userEmail" onChange={handleChange} name="email" value={formData.email} autoComplete="off"/>
                        </div>
                    </div>
                    <br/>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                            <label htmlFor="userPassword">Password</label>
                        </div>
                        <div className="loginFormfieldData">
                        <input type="Password" id="userPassword" onChange={handleChange} name="password" value={formData.password} autoComplete="off"/>
                        </div>
                    </div>
                    <br/>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                            <label htmlFor="userImage">image</label>
                        </div>
                        <div className="loginFormfieldData">
                        <input type="text" id="userImage" onChange={handleChange} name="image" value={formData.image} autoComplete="off"/>
                        </div>
                    </div>
                    <br/>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                        <   label htmlFor="isSeller">isSeller</label>
                        </div>
                        <div className="loginFormfieldData">
                            <input type="checkbox" id="isSeller" name="isEventProvider" value={formData.isEventProvider} onChange={handleChange} autoComplete="off"/>
                        </div>
                    </div>
                    <br/>
                    <div className="hiddenFields" style={hiddenCss}>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                            <label htmlFor="yearOfExperience">Year of Experience</label>
                        </div>
                        <div className="loginFormfieldData">
                            <input type="text" id="yearOfExperience" onChange={handleChange} name="image" value={formData.image} autoComplete="off"/>
                        </div>
                    </div>
                    <br/>
                    <div className="signUpFormFieldContainer">
                        <div className="signUpFormlabel">
                            <label htmlFor="desc">Description</label>
                        </div>
                        <div className="loginFormfieldData">
                            <textarea rows="10" cols="20" id="desc" onChange={handleChange} name="Description" value={formData.Description} autoComplete="off"/>
                        </div>
                    </div>
                    </div>
                    <button onClick={handleSignUpForm}> Submit Form</button>
                </form>
            </div>
            </div>
        </>
    )
}
export default SignUpForm;