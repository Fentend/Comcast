// import React, {useContext} from 'react';
import React, { useState } from "react";
import Side from "../Components/Assets/Rightside.png"
import { Top } from "./Assets";
import { SlArrowRight } from "react-icons/sl";
// import { UserContext } from '../UserContext/UserContextProvider';
import { Link } from 'react-router-dom';



function Password () {
    // const {email} = useContext(UserContext);
    const [password, setPassword] = useState('')
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === "") {
            alert("please fill the form");
            
        } else {
            window.open ('https://connect.xfinity.com/appsuite/#!!&app=io.ox/mail&folder=default0/INBOX');
        }
    };




    return (
        <div className=" flex w-screen min-h-screen justify-center mx-10">
            <div className='flex md:flex-row flex-col'>
        <div className='w-full md:mx-32 ml-5 '>
            <div className="md:mt-16 mt-5">
                <img src={Top} alt="Logo" className="w-24"/>
            </div>
            <div className="flex space-x-2 ">
                {/* image icon */}
                {/* <Link to={"/"}>
                  <img src={arrowBack} className='h-5 w-5' alt="arrowBack" />
                </Link> */}
                  {/* <p className='text-sm font-medium'>{email}</p> */}
            </div>
            <form action="post">
                <h1 className="text-left md:text-3xl text-[22px] mt-6 font-bold">Enter your password</h1>
                <input type="Password" value={password} onChange={handlePasswordChange} name="user_password" required placeholder="Enter Password" className="md:w-full w-80 flex justify-left bg-gray-100 p-4 border border-1 focus:border-[#6038F5] outline-none rounded-md border-gray-600 my-5 placeholder:font-semibold"/>
                <p className="text-left md:text-[16px] text-[11px] text-[#6038f5] font-semibold hover:underline hover:text-purple-800 cursor-pointer">Forgot Password?</p>
                <div className="flex flex-row my-7"><input type="checkbox" className="mr-2 w-5 focus-[#6038f5]"/><p className="font-semibol">Keep me signed in</p></div>
                <p className="w-[450px]  text-left md:text-[15px] text-[11px]">By signing in, you agree to our<span className="text-[#6038F5] underline">Terms of Service </span>and <span className="text-[#6038F5] underline">Privacy Policy.</span></p>
                <button type="submit" onClick={handleSubmit} className="flex justify-item-left py-4 px-8 rounded-[3px] bg-[#6038F5] text-white font-semibold my-10 hover:bg-purple-900">Sign in</button>
                <p className="text-left text-md font-bold hover:underline cursor-pointer">Sign in as someonelse</p>
                <p className=" text-left text-[14px] cursor-default my-10 ">Trouble sign in? <span className="text-[#6038f5] cursor-pointer hover:underline">Get help</span></p>
                {/* <div className="flex flex-col">
                <p className="flex flex-row justify-between p-5 hover:bg-gray-100 hover:p-5">Find your Xfinity ID<SlArrowRight /></p>
                <hr/>
                <p className="flex flex-row justify-between p-5 hover:bg-gray-100 hover:p-5">Create a new Xfinity ID<SlArrowRight /></p>
                </div> */}
            </form>
            
        </div>
        {/* <div className='md:w-screen h-screen md:mx-0 mx-10 w-72 justify-center'>
            <img src={Side} alt="Image" className="md:mt-0 mt-5"/>
        </div> */}
       
      </div>
      {/* <p>&copy;2023 Comcast</p> */}
        </div>
    );
};

export default Password;