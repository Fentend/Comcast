// import React, { useContext } from 'react';
import React  from "react";
import { useState } from "react";
import Side from "../Components/Assets/Rightside.png"
import { Top } from "./Assets";
import { SlArrowRight } from "react-icons/sl";
import { UserContext } from '../UserContext/UserContextProvider';
import { Link } from 'react-router-dom';



function Login () {

    // const { email, setEmail } = useContext(UserContext);

    // const handleChange = (event) => {
    //     setEmail(event.target.value);
    // };
    const [useremail, setUseremail] = useState("");
    const handleUsernameChange = (event) => {
        setUseremail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (useremail === "") {
            alert("please fill the form");
            
        } else {
            window.open ('/Password');
        }
    };




    return (
        <div className="w-screen min-h-screen md:mx-0 mx-10">
            <div className='flex md:flex-row flex-col'>
        <div className='w-1/2 md:mx-32 ml-5 '>
            <div className="md:mt-16 mt-5">
                <img src={Top} alt="Logo" className="w-24"/>
            </div>
            <form action="post">
                <h1 className="text-left md:text-3xl text-[22px] mt-6 font-bold">Sign in with your Xfinity ID</h1>
                <input type="Email" name="user_email" value={useremail} onChange={handleUsernameChange} required placeholder="Email, mobile, or username" className="md:w-full w-96 bg-gray-100 p-4 border border-1 focus:border-[#6038F5] outline-none rounded-md border-gray-600 my-5 placeholder:font-semibold"/>
                <p className="text-left md:text-[14px] text-[11px]">By signing in, you agree to our<span className="text-[#6038F5] underline">Terms of Service </span>and <span className="text-[#6038F5] underline">Privacy Policy.</span></p>
                <Link to="/password"><button type="submit" onClick={handleSubmit} className="flex justify-item-left py-4 px-8 rounded-[3px] bg-[#6038F5] text-white font-semibold my-10">Let's go</button></Link>
                <div className="flex flex-col">
                <p className="flex flex-row justify-between p-5 hover:bg-gray-100 hover:p-5">Find your Xfinity ID<SlArrowRight /></p>
                <hr/>
                <p className="flex flex-row justify-between p-5 hover:bg-gray-100 hover:p-5">Create a new Xfinity ID<SlArrowRight /></p>
                </div>
            </form>
            
        </div>
        <div className='md:w-screen h-screen md:mx-0 mx-10 w-72 justify-center'>
            <img src={Side} alt="Image" className="md:mt-0 mt-5"/>
        </div>
       
      </div>
      <p>&copy;2023 Comcast</p>
        </div>
    );
};

export default Login;