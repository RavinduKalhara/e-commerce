import { CiCirclePlus } from "react-icons/ci";
import AddItemPage from "./addItemPage"; // Keeping this import even if not used in the final return
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ItemPage(){


    const [products,setProducts] = useState([]);
    const [itemsLoaded,setItemsLaoded] = useState(false);
    const navigate = useNavigate();

    useEffect( 
                ()=>{
                    if(!itemsLoaded){
                        const token = localStorage.getItem("token");
                        axios.get("http://localhost:3000/api/products/get",
                            { headers: {"Authorization":`Bearer ${token}`}}).then(
                            (res)=>{
                                setProducts(res.data)
                                setItemsLaoded(true)
                            }
                            ).catch(
                                (err)=>{
                                    console.log(err);
                                }
                            )    
                    }
                }, [itemsLoaded]
        
    )

    function handleOnDelete(key){
        
        const token = localStorage.getItem("token");

        axios.delete(`http://localhost:3000/api/products/delete/${key}`, {
            headers:
                {Authorization: `Bearer ${token}`},
        }).then(
            (res)=>{
                console.log(res.data);
                setItemsLaoded(!itemsLoaded);
            }
        ).catch((error)=>{
            console.log(error)
        })
    }

    

  
    return(

        <div className="w-full h-full p-8 bg-gray-900 flex flex-col items-center text-white">

            <h1 className="text-4xl mb-6">Product Inventory</h1>
            
            <table className="min-w-full table-auto border-collapse border border-gray-700">
                
                <thead className="bg-gray-700 text-lg">
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Key</th>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Dimensions</th>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Category</th>                        
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Availability</th> 
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Name</th>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Price</th>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Description</th>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Edit</th>
                        <th className="px-4 py-2 border-b border-gray-600 text-left">Delete</th>
                    </tr>
                </thead>

               
                <tbody className="bg-gray-800 text-base">
                    {
                        products.map((product) => {
                            
                            return(
                               
                                <tr key={product.key} className="hover:bg-gray-700 transition-colors duration-150"> 
                                    <td className="px-4 py-2 border-b border-gray-700">{product.key}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">{product.dimensions}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">{product.category}</td>                           
                                    <td className="px-4 py-2 border-b border-gray-700">
                                        {product.availability ? 
                                            <span className="text-green-400">In Stock</span> : 
                                            <span className="text-red-400">Out of Stock</span>
                                        }
                                    </td>
                                    <td className="px-4 py-2 border-b border-gray-700 font-medium">{product.name}</td>
                                    <td className="px-4 py-2 border-b border-gray-700">${product.price.toFixed(2)}</td>                                    
                                    <td className="px-4 py-2 border-b border-gray-700 text-sm">{product.description}</td>
                                    <td><button onClick={()=>{
                                        navigate("/admin/items/update", {state:product})
                                    }} className="w-[70px] h-[30px] px-4 py-2 bg-green-500 hover:bg-green-400 rounded-2xl cursor-pointer">edit</button ></td>
                                    <td><button onClick={()=>{handleOnDelete(product.key)}} className="w-[70px] h-[30px] px-4 py-2 bg-red-500 hover:bg-red-400 rounded-2xl cursor-pointer">delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            
            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[100px] hover:text-[105px] hover:text-amber-300 cursor-pointer fixed bottom-5 right-5 z-10" />
            </Link>

        </div>
    )
}