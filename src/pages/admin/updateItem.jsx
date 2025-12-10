import { useState } from "react"
import React from 'react';
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


// The main application component for adding a new item
export default function UpdateItemPage() {

    const location = useLocation();
    const [key, setKey] = useState(location.state.key);
    const [name, setName] = useState(location.state.name);
    const [dimension, setDimension] = useState(location.state.dimensions);
    const [category, setCategory] = useState(location.state.category); // Corrected spelling from 'catogery'
    const [price, setPrice] = useState(location.state.price);
    const [description, setDescription] = useState(location.state.description);
    const navigate = useNavigate();

    // Submission handler function
     async function handleSubmit(e){
        e.preventDefault(); // Prevent the default browser form submission
        const token = localStorage.getItem("token");
        console.log(token)


        if(!token){
            toast.error("Please Log In first")
        }else{
            try{
            const result = await axios.put(`http://localhost:3000/api/products/update/${key}`,{
                key: key,
                name: name,
                dimensions: dimension,
                category: category,
                price: price,
                description: description
            },{
                headers:{
                    Authorization: "Bearer " + token
                }
            }) 
            toast.success(result.data)
            navigate("/admin/items")
        }catch(error){
          toast.error(error.result.data)  
    }

    }
    
        
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
            <h1 className="text-4xl font-extrabold text-white mb-8 mt-4">Update Inventory Item</h1>
            
            {/* The form container with the submission handler */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                
                {/* Input Field: Key */}
                <div className="mb-4">
                    <input 
                        disabled
                        type="text" 
                        placeholder="Unique Key (e.g., SKU-123)" 
                        onChange={(e) => setKey(e.target.value)} 
                        value={key} 
                        required
                        className="w-full p-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                </div>

                {/* Input Field: Name */}
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Item Name (e.g., Aurora RGB Light Strip)" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        required
                        className="w-full p-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                </div>

                {/* Input Field: Dimensions */}
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Dimensions (e.g., 10cm x 5cm x 200cm)" 
                        onChange={(e) => setDimension(e.target.value)} 
                        value={dimension} 
                        className="w-full p-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                </div>

                {/* Select Field: Category */}
                <div className="mb-4">
                    <select 
                        name="category" 
                        onChange={(e) => setCategory(e.target.value)} 
                        value={category} 
                        required
                        className="w-full p-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none transition duration-150"
                    >
                        <option value="" disabled>Select Category *</option>
                        <option value="Audio">Audio Equipment</option>
                        <option value="Lights">Smart Lighting</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Other">Other Electronics</option>
                    </select>
                </div>

                {/* Input Field: Price */}
                <div className="mb-4">
                    <input 
                        type="number" 
                        placeholder="Price (USD)" 
                        onChange={(e) => setPrice(e.target.value)} 
                        value={price} 
                        required
                        min="0.01"
                        step="0.01"
                        className="w-full p-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                </div>
                
                {/* Input Field: Description */}
                <div className="mb-6">
                    <textarea
                        placeholder="Product Description" 
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description} 
                        rows="3"
                        className="w-full p-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-150"
                    />
                </div>
                
                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-[1.01]"
                >
                    Update Item
                </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">* Required fields</p>
        </div>
    );
}