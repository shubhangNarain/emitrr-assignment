import Link from "next/link";
import React, { useState } from "react";

import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { auth } from "../firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  // const auth = getAuth();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = async () => {
    if(!email || !password || !name){
      return alert("Please fill all the fields")
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user);
    } catch (error) {
      console.error(error);
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
        <div className="h-full w-[300px]">
          <h1 className="p-7 text-4xl font-bold text-black ">
            Register
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

            <label className="p-2 text-xl font-bold">Name</label>
            <input className="p-2 border-2 border-gray-300 rounded-xl" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>

            {/* {console.log(name)}
            {console.log(username)}
            {console.log(email)}
            {console.log(password)} */}


            <label className="p-2 text-xl font-bold">Username</label>
            <input className="p-2 border-2 border-gray-300 rounded-xl" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>

            <label className="p-2 text-xl font-bold">Email</label>
            <input
              className="p-2 border-2 border-gray-300 rounded-xl"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="p-2 text-xl font-bold">Password</label>
            <input
              className="p-2 border-2 border-gray-300 rounded-xl"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="p-2 mt-4 bg-black rounded-xl text-white font-bold hover:bg-white hover:text-black border-2 hover:border-slate-600"
              onClick={signUpHandler}
            >
              Register
            </button>

            <p className="p-2 mt-4 text-xl font-light">
              Already have an account ?{" "}
              <Link className="text-gray-500 font-light underline hover:text-black hover:font-normal" href="/Login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
