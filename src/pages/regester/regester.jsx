import React, { useState } from "react";
import "./regester.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function RegesterUser() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    
    const [Image, setImage] = useState(null); 
    const navigate = useNavigate();
    function handleOnSubmit(e) {

        e.preventDefault(); 
        
        const userData = {
            email,
            password,
            firstName,
            lastName,
            address,
            phone,
            Image: Image instanceof File ? Image.name : Image || ""
        };

        console.log("Submitting Data:", userData);

        axios.post("http://localhost:3000/api/users/register", userData)
            .then(
                (res) => {
                    console.log(res.data);
                    toast.success("Registered successfully");
                    navigate("/login");
                } 
            )
            .catch(
                (err) => {
                    console.error("Registration Error:", err.response ? err.response.data : err.message);
                    toast.error("Registration failed");
                }
            );
    } 

    return (
        <div className="w-full h-screen bg-picture text-white text-2xl flex items-center justify-center">

            <div className="w-[600px] h-auto p-10 backdrop-blur-2xl rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center">User Registration</h2>
                

                <form onSubmit={handleOnSubmit} className="space-y-4">
                    
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block text-sm mb-1" htmlFor="firstName">First Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => { setFirstName(e.target.value); }}
                                required
                                className="w-full p-2 rounded text-gray-800 border border-gray-300"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm mb-1" htmlFor="lastName">Last Name*</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => { setLastName(e.target.value); }}
                                required
                                className="w-full p-2 rounded text-gray-800 border border-gray-300"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-1" htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                            required
                            className="w-full p-2 rounded text-gray-800 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1" htmlFor="password">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); }}
                            required
                            className="w-full p-2 rounded text-gray-800 border border-gray-300"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm mb-1" htmlFor="phone">Phone*</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value); }}
                            required
                            className="w-full p-2 rounded text-gray-800 border border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1" htmlFor="address">Address*</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value); }}
                            required
                            className="w-full p-2 rounded text-gray-800 border border-gray-300"
                        />
                    </div>


                    <div>
                        <label className="block text-sm mb-1" htmlFor="Image">Profile Image</label>
                        <input
                            type="file"
                            id="Image"
                            name="Image"

                            onChange={(e) => { setImage(e.target.files[0]); }}
                            className="w-full p-2 rounded text-sm text-gray-100 border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}