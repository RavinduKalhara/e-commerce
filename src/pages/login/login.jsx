import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './login.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email, password)

        axios.post("http://localhost:3000/api/users/login", {email: email , password: password}).then(
            (res)=>{
                console.log(res)
                toast.success("login success")

                const user = res.data.user
                localStorage.setItem("token", res.data.token)

                if(user.role === "customer"){
                    navigate("/")
                }
            }
        ).catch((err)=>{
            console.log(err)
            toast.error(err.response.data)
        }
    )
    }


    return(
        <div className="bg-picture w-full h-screen justify-center items-center flex">
            <div className="w-[400px] h-[400px] backdrop-blur-2xl rounded-2xl flex flex-col justify-center items-center gap-6 z-10">
                <img src="/logo.png" alt="logo" className="absolute top-1 w-[100px] h-[100px] object-cover"/>

                <form onSubmit={handleOnSubmit} className="flex flex-col justify-center items-center"> 

                    <input type="email" placeholder="email" className="mt-4 w-[300px] h-[50px] bg-transparent border-amber-50 text-amber-50 text-2xl outline-none" 
                    onChange={
                    (e)=>{
                        setEmail(e.target.value)
                        console.log(e)
                    }
                    } 
                    value={email}    />
                    <input type="password" placeholder="password" className="mt-4 w-[300px] h-[50px] bg-transparent border-amber-50 text-amber-50 text-2xl outline-none"  
                    onChange={
                    (p)=>{
                        setPassword(p.target.value)
                    }
                    }
                
                    value={password}/>
                    <button  className="my-6 w-[300px] h-[50px] bg-black text-amber-50 text-2xl  rounded-2xl ">Submit</button>

                </form>

                
            </div>
        </div>
    )
}