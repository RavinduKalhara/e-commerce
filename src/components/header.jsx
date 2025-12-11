 import { Link } from "react-router-dom"
  
 export default function Header() {
    return(
       <header className="w-full h-[100px] shadow-2xl flex justify-center items-center relative bg-accent">
                <img src="/public/logo.png" alt="logo" className="w-[90px] h-[90px] object-cover absolute left-6 border-2 rounded-full text-secondary                             " />
                <Link to = "/" className="text-xl font-bold m-10 ">Home</Link>
                <Link to = "/contact" className="text-xl font-bold m-10 ">Contact</Link>
                <Link to = "/gallery" className="text-xl font-bold m-10 ">Gallery</Link>
                <Link to = "/items" className="text-xl font-bold m-10 ">Items</Link>
            </header>
             
    )
 }