import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user';
// const BASE_URL = process.env.BASE_URL; 

function Signin() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const setUser = useSetRecoilState(userState); 

    return <div className='flex justify-center mt-20'>

    <div className="relative flex flex-col text-gray-700 bg-gray-800 shadow-md w-96 rounded-xl bg-clip-border">
    <div
      className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
      <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white" style={{fontFamily: 'Cookie', fontSize: "55px", color: 'white'}}>
        Login
      </h3>
    </div>
    <div className="flex flex-col gap-4 p-6">
      <div className="relative h-11 w-full min-w-[200px]">
        <input
            onChange={(evant11) => {
                let elemt = evant11.target;
                setEmail(elemt.value);
            }}
          className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-gray-300 border-gray-900 text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" " />
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
            onChange={(e) => {
            setPassword(e.target.value);
            }}
            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-gray-300 border-gray-900 text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" " />
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
      <div className="-ml-2.5">

      </div>
    </div>
    <div className="p-6 pt-0">
    <button
        style={{fontFamily: 'Cookie', fontSize: "20px", color: 'white'}}
        className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
        onClick={async () => {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
                username: email,
                password: password
            }, {
                 headers: {
                    "Content-type": "application/json"
                }
            }); 

            if (res.data.message === 'Invalid username or password'){

              window.alert('Invalid username or password');

            } else if (res.data.message === 'Invalid input') {

              window.alert('Invalid username or password'); 

            } else {
                        
              localStorage.setItem("token", res.data.token);
              setUser({ 
                  isLoading: false, 
                  userEmail: email
              })
              navigate("/"); 

            }

        }}
        type="button">
        Login
      </button>
      <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-gray-400">
        Don't have an account?
        <a
          className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-gray-300 cursor-pointer"
          onClick={() => {
            navigate("/signup")
          }}
          >
          Sign up
        </a>
      </p>
    </div>
  </div>
  </div>

    

}

export default Signin;