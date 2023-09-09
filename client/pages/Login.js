import Link from "next/link";
import React, { useState } from "react";

import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { auth } from "../firebase/firebase";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = () => {
    if(!email || !password){
      return alert("Please fill all the fields")
    }
    
  }


  return (
    <div className="h-screen bg-white lg:items-center lg:justify-center grid grid-flow-row lg:grid-flow-col lg:grid-cols-2">
      <div className="hidden lg:flex lg:h-full lg:w-150 sm:h-36 items-center justify-center bg-cover bg-quiz">
        <h1 className="text-white lg:text-black text-7xl tracking-widest font-bold">
          LangIQ
        </h1>
      </div>

      <div className="lg:hidden flex lg:h-full lg:w-150 h-36 items-center justify-center bg-cover bg-quiz shadow-xl">
        <h1 className="text-black text-5xl lg:text-7xl tracking-widest font-bold">
          LangIQ
        </h1>
      </div>

      <div className="flex flex-col items-center justify-start">
        <div className="h-[400px] w-[300px]">
          <h1 className="p-7 text-4xl font-bold text-black ">
            Login
          </h1>

          <button className="p-2 mt-4 w-full flex items-center justify-center bg-black rounded-xl text-white font-bold hover:bg-white hover:text-black border-2 hover:border-slate-600">
            <span className="px-2"><BsGoogle size={20}/></span>
            Register with google
          </button>
          <button className="p-2 mt-4 w-full flex items-center justify-center bg-black rounded-xl text-white font-bold hover:bg-white hover:text-black border-2 hover:border-slate-600">
            <span className="px-2"><BsFacebook size={20}/></span>
            Register with Facebook
          </button>


          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            <label className="p-2 text-xl font-bold">Email</label>
            <input
              className="p-2 border-2 border-gray-300 rounded-xl"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="p-2 text-xl font-bold">Password</label>
            <input
              className="p-2 border-2 border-gray-300 rounded-xl"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* {console.log(password)}
            {console.log(email)} */}

            <button className="p-2 mt-4 bg-black rounded-xl text-white font-bold hover:bg-white hover:text-black border-2 hover:border-slate-600"
              onSubmit={signInHandler}
            >
              Login
            </button>

            <p className="p-2 mt-4 text-xl font-light">
              Don't have an account ?{" "}
              <Link className="text-gray-500 font-light underline hover:text-black hover:font-normal" href="/Register">
                Register
              </Link>
            </p>
          </form>
        </div> 
      </div>
    </div>
  );
};

export default Login;
